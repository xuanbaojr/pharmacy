using System.ComponentModel.DataAnnotations;

namespace pharmacy.Models
{
    public class UserInformation
    {
        [Key]
        public string UserID { get; set; }
        public string? FullName { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; }
    }
}
