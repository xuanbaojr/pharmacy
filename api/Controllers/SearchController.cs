using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pharmacy.Data;
using pharmacy.Dtos.Medicine;
using pharmacy.Dtos.Search;
using pharmacy.Models;
using System.Linq;
using System.Threading.Tasks;
using System;
using Azure.Core;

namespace pharmacy.Controllers
{
    [Route("api/search")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private BaseResponse<object> _res;

        public SearchController(ApplicationDBContext context)
        {
            _context = context;
            _res = new BaseResponse<object>();
        }

        [HttpPost]
        public async Task<IActionResult> SearchMedicines([FromBody] SearchDto.SearchRequest searchRequest)
        {
            if (string.IsNullOrEmpty(searchRequest.SearchQuery))
            {
                _res.Status = StatusCodes.Status400BadRequest.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API*CODE", _res.Status, "Search query cannot be empty.", string.Empty));
                return BadRequest(_res);
            }

            try
            {
                var searchHistory = new SearchHistory
                {
                    SearchQuery = searchRequest.SearchQuery,
                    SearchDate = DateTime.UtcNow
                };
                _context.SearchHistories.Add(searchHistory);
                await _context.SaveChangesAsync();

                var sqlQuery = @"
                    SELECT TOP 100 PERCENT m.MedicineID, m.Name, m.Price, m.Stock, m.Specification, 
                           i.Url AS MainImage, 
                           ISNULL(SUM(oi.Quantity), 0) AS NumberOfSale, 
                           ft.RANK
                    FROM Medicines m
                    INNER JOIN FREETEXTTABLE(Medicines, Name, {0}) AS ft ON m.MedicineID = ft.[KEY]
                    LEFT JOIN Images i ON m.MedicineID = i.MedicineID AND i.isMainImage = 1
                    LEFT JOIN OrderItems oi ON m.MedicineID = oi.MedicineID
                    GROUP BY m.MedicineID, m.Name, m.Price, m.Stock, m.Specification, i.Url, ft.RANK
                    ORDER BY ft.RANK DESC";

                var medicines = await _context.Medicines
                    .FromSqlRaw(sqlQuery, searchRequest.SearchQuery)
                    .Select(m => new
                    {
                        Id = m.MedicineID,
                        Name = m.Name,
                        Price = m.Price,
                        Stock = m.Stock,
                        Specification = m.Specification,
                        mainImage = _context.Images.Where(i => i.MedicineID == m.MedicineID && i.isMainImage == true).Select(i => i.Url).FirstOrDefault(),
                        numberOfSale = _context.OrderItems.Where(oi => oi.MedicineID == m.MedicineID).Sum(oi => oi.Quantity),
                    })
                    .Skip((searchRequest.Page - 1) * searchRequest.PageSize)
                    .Take(searchRequest.PageSize)
                    .ToListAsync();

                if (!medicines.Any())
                {
                    _res.Status = StatusCodes.Status400BadRequest.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "No medicines found for the given search query.", string.Empty));
                    return Ok(_res);
                }
                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = medicines;
                return Ok(_res);
            }
            catch (Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpGet("history")]
        public async Task<IActionResult> GetRecentSearchHistory()
        {
            try
            {
                var recentSearchHistories = await _context.SearchHistories
                    .OrderByDescending(sh => sh.SearchDate)
                    .Take(5)
                    .ToListAsync();

                if (!recentSearchHistories.Any())
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "No search history found.", string.Empty));
                    return NotFound(_res);
                }

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = recentSearchHistories;
                return Ok(_res);
            }
            catch (Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }
    }
}
