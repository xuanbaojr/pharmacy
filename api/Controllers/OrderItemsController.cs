﻿using Microsoft.AspNetCore.Authorization;
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
    [Route("api")]
    [ApiController]
    public class OrderItemsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly UserManager<AppUser> _userManager;
        private BaseResponse<object> _res;

        public OrderItemsController(ApplicationDBContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
            _res = new BaseResponse<object>();
        }

        [HttpGet("ROI01")]
        [Authorize]
        public async Task<IActionResult> GetAllOrderItems()
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

                var orderItems = await _context.OrderItems
                    .Where(oi => _context.Orders.Any(o => o.OrderID == oi.OrderID && o.UserID == userId))
                    .Select(oi => new OrderItemDto.OrderItemResponse
                    {
                        OrderItemID = oi.OrderItemID ?? 0,
                        MedicineID = oi.MedicineID ?? 0,
                        Quantity = oi.Quantity,
                        TotalPrice = oi.TotalPrice ?? 0
                    })
                    .ToListAsync();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = orderItems;
                return Ok(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpPost("IOI01")]
        [Authorize]
        public async Task<IActionResult> AddOrderItem([FromBody] OrderItemDto.OrderItemRequest request)
        {
            if (User?.Identity?.IsAuthenticated != true)
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

                var user = await _context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.UserName == givenName);
                if (user == null)
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User not found.", string.Empty));
                    return Unauthorized(_res);
                }

                var order = await _context.Orders.AsNoTracking().FirstOrDefaultAsync(o => o.UserID == user.Id && o.IsBuy == false);
                if (order == null)
                {
                    order = new Order { UserID = user.Id, IsBuy = false, TotalAmount = 0, CreatedAt = DateTime.UtcNow };
                    _context.Orders.Add(order);
                    await _context.SaveChangesAsync();

                    order = await _context.Orders.AsNoTracking().FirstOrDefaultAsync(o => o.UserID == user.Id && o.IsBuy == false);
                }

                var medicine = await _context.Medicines.AsNoTracking().FirstOrDefaultAsync(m => m.MedicineID == request.MedicineID);
                if (medicine == null)
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Medicine not found.", string.Empty));
                    return NotFound(_res);
                }

                var orderItem = new OrderItem
                {
                    OrderID = order.OrderID,
                    MedicineID = request.MedicineID,
                    Quantity = request.Quantity,
                    Price = medicine.Price,
                    TotalPrice = request.Quantity * medicine.Price
                };

                _context.OrderItems.Add(orderItem);
                await _context.SaveChangesAsync();

                var orderItemResponse = new OrderItemDto.OrderItemResponse
                {
                    OrderItemID = orderItem.OrderItemID ?? 0,
                    MedicineID = orderItem.MedicineID ?? 0,
                    Quantity = orderItem.Quantity,
                    TotalPrice = orderItem.TotalPrice ?? 0
                };

                _res.Status = StatusCodes.Status201Created.ToString();
                _res.Data = orderItemResponse;
                return Ok(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }




        [HttpDelete("DOI01/{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteOrderItem(int id)
        {
            if (!User.Identity.IsAuthenticated)
            {
                _res.Status = StatusCodes.Status401Unauthorized.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User is not authenticated.", string.Empty));
                return Unauthorized(_res);
            }
            try
            {
                var orderItem = await _context.OrderItems.FindAsync(id);
                if (orderItem == null)
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Order item not found.", string.Empty));
                    return NotFound(_res);
                }

                _context.OrderItems.Remove(orderItem);
                await _context.SaveChangesAsync();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = orderItem;
                return Ok(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpPut("UOI01/{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateOrderItem(int id, [FromBody] OrderItemDto.UpdateOrderItemRequest request)
        {
            if (!User.Identity.IsAuthenticated)
            {
                _res.Status = StatusCodes.Status401Unauthorized.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User is not authenticated.", string.Empty));
                return Unauthorized(_res);
            }
            try
            {
                var orderItem = await _context.OrderItems.FindAsync(id);
                if (orderItem == null)
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Order item not found.", string.Empty));
                    return NotFound(_res);
                }

                orderItem.Quantity = request.Quantity;
                orderItem.TotalPrice = orderItem.Price * request.Quantity;

                _context.OrderItems.Update(orderItem);
                await _context.SaveChangesAsync();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = orderItem;
                return Ok(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpGet("ROI02")]
        [Authorize]
        public async Task<IActionResult> GetCartItems()
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

                var cartItems = await _context.OrderItems
                    .Where(oi => _context.Orders.Any(o => o.OrderID == oi.OrderID && o.UserID == userId && o.IsBuy == false))
                    .Select(oi => new OrderItemDto.OrderItemResponse
                    {
                        OrderItemID = oi.OrderItemID ?? 0,
                        MedicineID = oi.MedicineID ?? 0,
                        Quantity = oi.Quantity,
                        TotalPrice = oi.TotalPrice ?? 0,
                    })
                    .ToListAsync();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = cartItems;
                return Ok(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpGet("/totalAmount")]
        [Authorize]
        public async Task<IActionResult> GetCartTotal()
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

                var order = await _context.Orders.FirstOrDefaultAsync(o => o.UserID == user.Id && o.IsBuy == false);
                if (order == null)
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Order not found.", string.Empty));
                    return NotFound(_res);
                }

                var cartTotal = await _context.OrderItems
                    .Where(oi => oi.OrderID == order.OrderID)
                    .SumAsync(oi => oi.Quantity * oi.Price);

                order.TotalAmount = cartTotal;
                _context.Orders.Update(order);
                await _context.SaveChangesAsync();

                var totalAmountResponse = new OrderItemDto.TotalAmountResponse
                {
                    TotalAmount = cartTotal
                };

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = totalAmountResponse;
                return Ok(_res);
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
