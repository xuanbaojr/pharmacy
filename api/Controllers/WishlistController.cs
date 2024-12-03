using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pharmacy.Data;
using pharmacy.Dtos.Wishlist;
using pharmacy.Extensions;
using pharmacy.Models;
using System.Security.Claims;

namespace pharmacy.Controllers
{
    [Route("api")]
    [ApiController]
    public class WishlistController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly UserManager<AppUser> _userManager;
        private BaseResponse<object> _res;

        public WishlistController(ApplicationDBContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
            _res = new BaseResponse<object>();
        }

        [HttpGet("RWL01")]
        [Authorize]
        public async Task<IActionResult> GetWishlist()
        {
            try
            {
                var givenName = User.GetUsername();
                if (string.IsNullOrEmpty(givenName))
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Given name not found.", string.Empty));
                    return Unauthorized(_res);
                }

                var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == givenName);
                if (user == null)
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User not found.", string.Empty));
                    return Unauthorized(_res);
                }

                var userId = user.Id;

                var wishlist = await _context.Wishlist
                    .Where(w => w.UserID == userId)
                    .Select(w => new WishlistResponse
                    {
                        WishlistID = w.WishlistID,
                        MedicineID = w.MedicineID,
                        Name = _context.Medicines.Where(m => m.MedicineID == w.MedicineID).Select(m => m.Name).FirstOrDefault(),
                        Price = _context.Medicines.Where(m => m.MedicineID == w.MedicineID).Select(m => m.Price).FirstOrDefault(),
                        MainImage = _context.Images.Where(i => i.MedicineID == w.MedicineID && i.isMainImage == true).Select(i => i.Url).FirstOrDefault()
                    })
                    .ToListAsync();
               
                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = wishlist;
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

        [HttpPost("IWL01")]
        [Authorize]
        public async Task<IActionResult> AddToWishlist([FromBody] WishlistDto wishlistDto)
        {
            if (!User.Identity.IsAuthenticated)
            {
                _res.Status = StatusCodes.Status401Unauthorized.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User is not authenticated.", string.Empty));
                return Unauthorized(_res);
            }
            try
            {
                var givenName = User.GetUsername();
                if (string.IsNullOrEmpty(givenName))
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Given name not found.", string.Empty));
                    return Unauthorized(_res);
                }

                var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == givenName);
                if (user == null)
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User not found.", string.Empty));
                    return Unauthorized(_res);
                }

                var userId = user.Id;

                var medicineId = await _context.Medicines
                    .Where(m => m.MedicineID == wishlistDto.MedicineID)
                    .Select(m => m.MedicineID)
                    .FirstOrDefaultAsync();

                if (medicineId == 0)
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Medicine not found.", string.Empty));
                    return NotFound(_res);
                }

                var existingWishlistItem = await _context.Wishlist
                    .FirstOrDefaultAsync(w => w.UserID == userId && w.MedicineID == medicineId);

                if (existingWishlistItem != null)
                {
                    _res.Status = StatusCodes.Status400BadRequest.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "The wishlist already has this medicine", string.Empty));
                    return BadRequest(_res);
                }

                var wishlistItem = new Wishlist
                {
                    UserID = userId,
                    MedicineID = medicineId,
                    AddedDate = DateTime.UtcNow
                };

                _context.Wishlist.Add(wishlistItem);
                await _context.SaveChangesAsync();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = wishlistItem;
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

        [HttpDelete("DWL01/{id}")]
        [Authorize]
   
        public async Task<IActionResult> DeleteFromWishlist(int id)
        {
            if (!User.Identity.IsAuthenticated)
            {
                _res.Status = StatusCodes.Status401Unauthorized.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User is not authenticated.", string.Empty));
                return Unauthorized(_res);
            }
            try
            {
                var givenName = User.GetUsername();
                if (string.IsNullOrEmpty(givenName))
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Given name not found.", string.Empty));
                    return Unauthorized(_res);
                }

                // Lấy Id từ given_name
                var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == givenName);
                if (user == null)
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User not found.", string.Empty));
                    return Unauthorized(_res);
                }

                var userId = user.Id;

                var wishlistItem = await _context.Wishlist
                    .FirstOrDefaultAsync(w => w.WishlistID == id && w.UserID == userId);

                if (wishlistItem == null)
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    return NotFound(_res);
                }

                _context.Wishlist.Remove(wishlistItem);
                await _context.SaveChangesAsync();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = wishlistItem;
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
