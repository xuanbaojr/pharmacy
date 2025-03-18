namespace pharmacy.Models
{
    public class Wishlist
    {
        public int WishlistID { get; set; }
        public string? UserID { get; set; }
        public int? MedicineID { get; set; }
        public DateTime? AddedDate { get; set; }
        public string? FlexCol1 { get; set; }
        public string? FlexCol2 { get; set; }
        public string? FlexCol3 { get; set; }
        public string? FlexCol4 { get; set; }
        public string? FlexCol5 { get; set; }
    }
}
