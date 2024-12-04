using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace pharmacy.Dtos.Order
{
    public class OrderDto
    {
        public class UpdateOrderRequest
        {
            public string? Status { get; set; }
        }
        public class OrderRequest
        {
            [Required]
            public string ShippingAddress { get; set; }
            [Required]
            public string Orderer { get; set; }
            [Required]
            public string Consignee { get; set; }
            public string OrderPhoneNum { get; set; }
            [Required]
            public string ReceivePhoneNum { get; set; }
            public string? Note { get; set; }
            [Required]
            public string PaymentMethod { get; set; }
        }

        public class OrderResponse
        {
            public int OrderID { get; set; }
            public string? Status { get; set; }
            public string CreatedAt { get; set; }
            public string? ShippingAddress { get; set; }
            public string? Orderer { get; set; }
            public string? Consignee { get; set; }
            public string? OrderPhoneNum { get; set; }   
            public string? ReceivePhoneNum { get; set; }
            public string? Note { get; set; }
            public string? PaymentMethod { get; set; }
            public decimal TotalAmount { get; set; }
            public List<OrderItemDto.OrderItemResponse> OrderItems { get; set; }
        }
    }
}
