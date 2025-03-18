using System.ComponentModel.DataAnnotations;
using pharmacy.Dtos.Medicine;
using pharmacy.Dtos.Order;

namespace pharmacy.Dtos.Search
{
    public class SearchDto
    {
        public class SearchRequest
        {   
            public string? SearchQuery { get; set; }
            public int Page { get; set; }
            public int PageSize { get; set; }
        }
        public class SearchResponse
        {

            public List<MedicineDto.MedicineResponse> Medicines { get; set; }
        }
    }
}
