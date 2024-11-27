using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pharmacy.Data;
using pharmacy.Dtos.Medicine;
using pharmacy.Dtos.Search;
using pharmacy.Models;
using System.Linq;
using System.Threading.Tasks;

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
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Search query cannot be empty.", string.Empty));
                return BadRequest(_res);
            }

            try
            {
                var searchQueryTerms = searchRequest.SearchQuery.ToLower().Split(' ');
                var searchHistory = new SearchHistory
                {
                    UserID = searchRequest.UserId,
                    SearchQuery = searchRequest.SearchQuery,
                    SearchDate = DateTime.UtcNow
                };

                _context.SearchHistories.Add(searchHistory);
                await _context.SaveChangesAsync();

                var medicines = await _context.Medicines
                    .Where(m => searchQueryTerms.Any(term => EF.Functions.Like(m.Name.ToLower(), "%" + term + "%")))
                    .Select(m => new MedicineDto.MedicineResponse
                    {
                        Id = m.MedicineID,
                        Name = m.Name,
                        Price = m.Price,
                        Stock = m.Stock,
                        Specification = m.Specification,
                        MainImage = _context.Images.Where(i => i.MedicineID == m.MedicineID && i.isMainImage == true).Select(i => i.Url).FirstOrDefault(),
                        NumberOfSale = _context.OrderItems.Where(oi => oi.MedicineID == m.MedicineID).Sum(oi => oi.Quantity)
                    })
                    .ToListAsync();

                var response = new SearchDto.SearchResponse
                {
                    Medicines = medicines
                };

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = response;
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

