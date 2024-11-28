using System;
using System.ComponentModel.DataAnnotations;

namespace pharmacy.Dtos.Order
{
    public class OrderItemDto
    {
        public class OrderItemRequest
        {
            [Required]
            public int MedicineID { get; set; }
            [Required]
            public int Quantity { get; set; }
        }

        public class OrderItemResponse
        {
            public int OrderItemID { get; set; }
            public int MedicineID { get; set; }
            public string? Name { get; set; }
            public string? MainImage { get; set; }
            public int Quantity { get; set; }
            public decimal TotalPrice { get; set; }
        }
        public class TotalAmountResponse
        {
            public decimal TotalAmount { get; set; }
        }
        public class UpdateOrderItemRequest
        {
            [Required]
            public int Quantity { get; set; }
        }
    }
}
