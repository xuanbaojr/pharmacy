using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pharmacy.Data;
using pharmacy.Dtos.Medicine;
using pharmacy.Models;
using System.Linq;

namespace pharmacy.Controllers.Medicine
{
    [Route("api")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private BaseResponse<object> _res;

        public MedicineController(ApplicationDBContext context)
        {
            _context = context;
            _res = new BaseResponse<object>();
        }

        [HttpPost("RMD01")]
        public IActionResult GetAll([FromBody] MedicineDto.GetMedicineRequest request)
        {
            try
            {
                var medicines = _context.Medicines
                    .Select(m => new
                    {
                        id = m.MedicineID,
                        name = m.Name,
                        stock = m.Stock,
                        price = m.Price,
                        specification = m.Specification,
                        mainImage = _context.Images.Where(i => i.MedicineID == m.MedicineID && i.isMainImage == true).Select(i => i.Url).FirstOrDefault(),
                        numberOfSale = _context.OrderItems.Where(oi => oi.MedicineID == m.MedicineID).Sum(oi => oi.Quantity)
                    })
                    .Skip((request.Page - 1) * request.PageSize)
                    .Take(request.PageSize)
                    .ToList();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = medicines;
                return Ok(_res);
            }
            catch (PharmacyException ex0)
            {
                _res.Status = StatusCodes.Status400BadRequest.ToString();
                _res.Messages = ex0.Messages;
                return BadRequest(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpGet("RMD01/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            try
            {
                var medicine = _context.Medicines.Where(m => m.MedicineID == id).Select(m => new
                {
                    Id = m.MedicineID,
                    name = m.Name,
                    price = m.Price,
                    stock = m.Stock,
                    weight = m.Weight,
                    category = m.Category,
                    specification = m.Specification,
                    ingredient = m.Ingredient,
                    indication = m.Indication,
                    contraindication = m.Contraindication,
                    country = m.Country,
                    intendedFor = m.IntendedFor,
                    images = _context.Images.Where(i => i.MedicineID == m.MedicineID).Select(i => new
                    {
                        i.Url,
                    }).ToList(),
                    numberOfSale = _context.OrderItems.Where(oi => oi.MedicineID == m.MedicineID).Sum(oi => oi.Quantity)
                }).FirstOrDefault();
                if (medicine == null)
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    return NotFound(_res);
                }

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = medicine;
                return Ok(_res);
            }
            catch (PharmacyException ex0)
            {
                _res.Status = StatusCodes.Status400BadRequest.ToString();
                _res.Messages = ex0.Messages;
                return BadRequest(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpPost("RMD02")]
        public IActionResult SearchMedicines([FromBody] MedicineDto.MedicineSearchRequest searchRequest)
        {
            try
            {
                var query = _context.Medicines.AsQueryable();

                if (!string.IsNullOrEmpty(searchRequest.Category))
                {
                    query = query.Where(m => m.Category == searchRequest.Category);
                }

                if (searchRequest.MinPrice.HasValue)
                {
                    query = query.Where(m => m.Price >= searchRequest.MinPrice.Value);
                }

                if (searchRequest.MaxPrice.HasValue)
                {
                    query = query.Where(m => m.Price <= searchRequest.MaxPrice.Value);
                }

                var medicines = query
                    .Select(m => new MedicineDto.MedicineResponse
                    {
                        Id = m.MedicineID,
                        Name = m.Name,
                        Price = m.Price,
                        Stock = m.Stock,
                        Specification = m.Specification,
                        NumberOfSale = _context.OrderItems.Where(oi => oi.MedicineID == m.MedicineID).Sum(oi => oi.Quantity)
                    })
                    .Skip((searchRequest.Page - 1) * searchRequest.PageSize)
                    .Take(searchRequest.PageSize)
                    .ToList();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = medicines;
                return Ok(_res);
            }
            catch (PharmacyException ex0)
            {
                _res.Status = StatusCodes.Status400BadRequest.ToString();
                _res.Messages = ex0.Messages;
                return BadRequest(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }
    }
}
