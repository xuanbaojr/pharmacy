using System.ComponentModel.DataAnnotations.Schema;


namespace pharmacy.Models
{
    public class Medicine
    {
        public required int MedicineID { get; set; }
        public required string Name { get; set; }
        public string Description { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public required decimal Price { get; set; }
        public required int Stock { get; set; }
        public int? SellerID { get; set; }
        public string Weight { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? Category { get; set; }
        public string? Ingredient { get; set; }
        public string? Indication { get; set; }
        public string? Contraindication { get; set; }
        public string? Country { get; set; }
        public string? Specification { get; set; }
        public string? IntendedFor { get; set; }
        public string? FlexCol1 { get; set; }
        public string? FlexCol2 { get; set; }
        public string? FlexCol3 { get; set; }
        public string? FlexCol4 { get; set; }
        public string? FlexCol5 { get; set; }
    }
}
