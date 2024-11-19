using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace pharmacy.Dtos.Order
{
    public class OrderDto
    {
        public class OrderRequest
        {
            [Required]
            public string ShippingAddress { get; set; }
            [Required]
            public List<OrderItemDto.OrderItemRequest> OrderItems { get; set; }
        }

        public class OrderResponse
        {
            public int OrderID { get; set; }
            public string Status { get; set; }
            public DateTime CreatedAt { get; set; }
            public decimal TotalAmount { get; set; }
            public List<OrderItemDto.OrderItemResponse> OrderItems { get; set; }
        }
    }
}
