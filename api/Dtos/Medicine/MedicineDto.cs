using System.ComponentModel.DataAnnotations.Schema;
using pharmacy.Models;

namespace pharmacy.Dtos.Medicine
{
    public class MedicineDto
    {
        public class MedicineSearchRequest
        {
            public int Page { get; set; }
            public int PageSize { get; set; }
            public string? Category { get; set; }
            public decimal? MinPrice { get; set; }
            public decimal? MaxPrice { get; set; }
        }
        
        public class GetMedicineRequest
        {
            public int Page { get; set; }
            public int PageSize { get; set; }
        }
        public class MedicineResponse
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public decimal Price { get; set; }
            public int Stock { get; set; }
            public string? Specification { get; set; }
            public string? MainImage { get; set; }
            public int NumberOfSale { get; set; }
        }
        public class UploadMedicineImagesRequest
        {
            public int MedicineID { get; set; }
            public List<IFormFile> Images { get; set; }
        }
        public class InsertMedicineRequest
        {
            public string Name { get; set; }
            public string? Description { get; set; }
            public decimal Price { get; set; }
            public int Stock { get; set; }
            public int? SellerID { get; set; }
            public string? Weight { get; set; }
            public string? Category { get; set; }
            public string? Ingredient { get; set; }
            public string? Indication { get; set; }
            public string? Contraindication { get; set; }
            public string? Country { get; set; }
            public string? Specification { get; set; }
            public string? IntendedFor { get; set; }
            public List<IFormFile> Images { get; set; }
        }

    }
}
