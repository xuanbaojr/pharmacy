﻿using System;
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
            public int Quantity { get; set; }
            public decimal Price { get; set; }
        }
    }
}