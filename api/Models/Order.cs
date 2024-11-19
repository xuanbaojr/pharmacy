using System.ComponentModel.DataAnnotations.Schema;

namespace pharmacy.Models
{
    public class Order
    {
        public int OrderID { get; set; }
        public string? UserID { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal TotalAmount { get; set; }
        public string? Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? ShippingAddress { get; set; }
        public string? FlexCol2 { get; set; }
        public string? FlexCol3 { get; set; }
        public string? FlexCol4 { get; set; }
        public string? FlexCol5 { get; set; }
    }
}
