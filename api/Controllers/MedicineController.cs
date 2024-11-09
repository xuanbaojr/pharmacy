using Microsoft.AspNetCore.Mvc;
using pharmacy.Data;
using pharmacy.Models;
using System.Linq;
using System.Reflection.Metadata;

namespace pharmacy.Controllers.Medicine
{
    [Route("api/RMD01")]
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

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var medicines = _context.Medicines.Select(m => new
                {
                    Id = m.MedicineID,
                    name = m.Name,   
                    stock = m.Stock,
                    price = m.Price,
                    specification = m.Specification,
                }).ToList();

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

        [HttpGet("{id}")]
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
    }
}
