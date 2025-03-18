namespace pharmacy.Dtos.Wishlist
{
    public class WishlistDto
    {
        public int MedicineID { get; set; }
    }
    public class WishlistResponse
    {
        public int? WishlistID { get; set; }
        public int? MedicineID { get; set; }
        public string? Name { get; set; }
        public decimal Price { get; set; }
        public string? MainImage { get; set; }

    }
}
