using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pharmacy.Data;
using pharmacy.Dtos.Order;
using pharmacy.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace pharmacy.Controllers
{
    [Route("api/IOD01")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly UserManager<AppUser> _userManager;
        private BaseResponse<object> _res;

        public OrderController(ApplicationDBContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
            _res = new BaseResponse<object>();
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateOrder([FromBody] OrderDto.OrderRequest orderRequest)
        {
            if (!User.Identity.IsAuthenticated)
            {
                _res.Status = StatusCodes.Status401Unauthorized.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User is not authenticated.", string.Empty));
                return Unauthorized(_res);
            }
            try
            {
                var givenName = User.Claims.FirstOrDefault(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname")?.Value;
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

                var order = new Order
                {
                    UserID = userId,
                    ShippingAddress = orderRequest.ShippingAddress,
                    Status = "Pending",
                    CreatedAt = DateTime.UtcNow,
                    TotalAmount = 0 // Will be calculated later
                };

                _context.Orders.Add(order);
                await _context.SaveChangesAsync();

                decimal totalAmount = 0;
                foreach (var item in orderRequest.OrderItems)
                {
                    var medicine = await _context.Medicines
                        .FirstOrDefaultAsync(m => m.MedicineID == item.MedicineID);

                    if (medicine == null)
                    {
                        _res.Status = StatusCodes.Status404NotFound.ToString();
                        _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Medicine not found.", string.Empty));
                        return NotFound(_res);
                    }

                    var orderItem = new OrderItem
                    {
                        OrderID = order.OrderID,
                        MedicineID = item.MedicineID,
                        Quantity = item.Quantity,
                        Price = medicine.Price * item.Quantity
                    };

                    totalAmount += orderItem.Price;

                    _context.OrderItems.Add(orderItem);
                }

                order.TotalAmount = totalAmount;
                await _context.SaveChangesAsync();

                var orderResponse = new OrderDto.OrderResponse
                {
                    OrderID = order.OrderID,
                    Status = order.Status,
                    CreatedAt = order.CreatedAt,
                    TotalAmount = order.TotalAmount,
                    OrderItems = await _context.OrderItems
                        .Where(oi => oi.OrderID == order.OrderID)
                        .Select(oi => new OrderItemDto.OrderItemResponse
                        {
                            OrderItemID = oi.OrderItemID ?? 0,
                            MedicineID = oi.MedicineID ?? 0,
                            Quantity = oi.Quantity,
                            Price = oi.Price
                        })
                        .ToListAsync()
                };

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = orderResponse;
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
