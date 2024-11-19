using System.ComponentModel.DataAnnotations.Schema;

namespace pharmacy.Models
{
    public class OrderItem
    { 
        public int? OrderItemID { get; set; }
        public int OrderID { get; set; }
        public int? MedicineID { get; set; }
        public int Quantity { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        public string? FlexCol1 { get; set; }
        public string? FlexCol2 { get; set; }
        public string? FlexCol3 { get; set; }
        public string? FlexCol4 { get; set; }
        public string? FlexCol5 { get; set; }
    }
}
