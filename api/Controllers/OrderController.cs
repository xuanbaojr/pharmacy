﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pharmacy.Data;
using pharmacy.Dtos.Order;
using pharmacy.Extensions;
using pharmacy.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace pharmacy.Controllers
{
    [Route("api")]
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

        [HttpPost("IOD01")]
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

                var existingOrder = await _context.Orders.FirstOrDefaultAsync(o => o.UserID == userId && !o.IsBuy);
                if (existingOrder != null)
                {
                    existingOrder.ShippingAddress = orderRequest.ShippingAddress;
                    existingOrder.Orderer = orderRequest.Orderer;
                    existingOrder.Consignee = orderRequest.Consignee;
                    existingOrder.OrderPhoneNum = orderRequest.OrderPhoneNum;
                    existingOrder.ReceivePhoneNum = orderRequest.ReceivePhoneNum;
                    existingOrder.Note = orderRequest.Note;
                    existingOrder.PaymentMethod = orderRequest.PaymentMethod;
                    existingOrder.Status = "Pending";
                    existingOrder.CreatedAt = DateTime.UtcNow;
                    existingOrder.IsBuy = true;

                    _context.Orders.Update(existingOrder);
                    await _context.SaveChangesAsync();

                    _res.Status = StatusCodes.Status200OK.ToString();
                    _res.Data = existingOrder;
                    return Ok(_res);
                }
                else
                {
                    _res.Status = StatusCodes.Status400BadRequest.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Chưa có sản phẩm nào được thêm vào giỏ hàng.", string.Empty));
                    return BadRequest(_res);
                }
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpGet("ROD02/{id}")]
        [Authorize]
        public async Task<IActionResult> GetOrder(int id)
        {
            if (!User.Identity.IsAuthenticated)
            {
                _res.Status = StatusCodes.Status401Unauthorized.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User is not authenticated.", string.Empty));
                return Unauthorized(_res);
            }
            try
            {
                var order = await _context.Orders.FirstOrDefaultAsync(o => o.OrderID == id);

                if (order == null)
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Order not found.", string.Empty));
                    return NotFound(_res);
                }

                var orderItems = await _context.OrderItems
                    .Where(oi => oi.OrderID == id)
                    .ToListAsync();

                var orderResponse = new OrderDto.OrderResponse
                {
                    OrderID = order.OrderID,
                    Status = order.Status,
                    CreatedAt = order.CreatedAt.ToString("yyyy-MM-dd"),
                    ShippingAddress = order.ShippingAddress,
                    Orderer = order.Orderer,
                    Consignee = order.Consignee,
                    OrderPhoneNum = order.OrderPhoneNum,
                    ReceivePhoneNum = order.ReceivePhoneNum,
                    Note = order.Note,
                    PaymentMethod = order.PaymentMethod,
                    TotalAmount = order.TotalAmount,
                    OrderItems = orderItems.Select(oi => new OrderItemDto.OrderItemResponse
                    {
                        OrderItemID = oi.OrderItemID ?? 0,
                        Name = _context.Medicines.Where(m => m.MedicineID == oi.MedicineID).Select(m => m.Name).FirstOrDefault(),
                        MainImage = _context.Images.Where(i => i.MedicineID == oi.MedicineID && i.isMainImage == true).Select(i => i.Url).FirstOrDefault(),
                        Quantity = oi.Quantity,
                        TotalPrice = oi.TotalPrice ?? 0,
                    }).ToList()
                };

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = orderResponse;
                return Ok(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpDelete("DOD01/{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            if (!User.Identity.IsAuthenticated)
            {
                _res.Status = StatusCodes.Status401Unauthorized.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User is not authenticated.", string.Empty));
                return Unauthorized(_res);
            }
            try
            {
                var order = await _context.Orders.FindAsync(id);
                if (order == null)
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Order not found.", string.Empty));
                    return NotFound(_res);
                }

                _context.Orders.Remove(order);
                await _context.SaveChangesAsync();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = order;
                return Ok(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpGet("ROD01")]
        [Authorize]
        public async Task<IActionResult> GetAllOrders()
        {
            if (!User.Identity.IsAuthenticated)
            {
                _res.Status = StatusCodes.Status401Unauthorized.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User is not authenticated.", string.Empty));
                return Unauthorized(_res);
            }
            try
            {
                var orders = await _context.Orders
                .Where(o => o.IsBuy)
                .Select(o => new OrderDto.OrderResponse
                {
                    OrderID = o.OrderID,
                    Status = o.Status,
                    CreatedAt = o.CreatedAt.ToString("dd-MM-yyyy"), 
                    ShippingAddress = o.ShippingAddress,
                    Orderer = o.Orderer,
                    Consignee = o.Consignee,
                    OrderPhoneNum = o.OrderPhoneNum,
                    ReceivePhoneNum = o.ReceivePhoneNum,
                    Note = o.Note,
                    PaymentMethod = o.PaymentMethod,
                    TotalAmount = o.TotalAmount
                })
                .ToListAsync();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = orders;
                return Ok(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpGet("ROD02")]
        [Authorize]
        public async Task<IActionResult> GetOrdersByUser()
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

                var orders = await _context.Orders
                .Where(o => o.IsBuy && o.UserID == user.Id)
                .Select(o => new OrderDto.OrderResponse
                {
                    OrderID = o.OrderID,
                    Status = o.Status,
                    CreatedAt = o.CreatedAt.ToString("dd-MM-yyyy"),
                    ShippingAddress = o.ShippingAddress,
                    Orderer = o.Orderer,
                    Consignee = o.Consignee,
                    OrderPhoneNum = o.OrderPhoneNum,
                    ReceivePhoneNum = o.ReceivePhoneNum,
                    Note = o.Note,
                    PaymentMethod = o.PaymentMethod,
                    TotalAmount = o.TotalAmount
                })
                .ToListAsync();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = orders;
                return Ok(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpPost("UOD01/{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateStatusOrder(int id, OrderDto.UpdateOrderRequest request)
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

                var RoleID = await _context.UserRoles.FirstOrDefaultAsync(u => u.UserId == user.Id);
                var Role = await _context.Roles.FirstOrDefaultAsync(r => r.Id == RoleID.RoleId);
                if (Role == null) {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Role not found.", string.Empty));
                    return Unauthorized(_res);
                }
                if (Role.Name != "Shipper")
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User is not Shipper.", string.Empty));
                    return Unauthorized(_res);
                }
                var order = await _context.Orders.FindAsync(id);
                   
                if (order == null) {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Order not found.", string.Empty));
                    return NotFound(_res);
                }
                order.Status = request.Status;
                _context.Orders.Update(order);
                await _context.SaveChangesAsync();
                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = order;
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
