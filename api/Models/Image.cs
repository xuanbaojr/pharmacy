namespace pharmacy.Models
{
    public class Image
    {
        public int ImageID { get; set; }
        public int? MedicineID { get; set; }
        public string? Url { get; set; }
        public Boolean? isMainImage { get; set; }

    }
}
