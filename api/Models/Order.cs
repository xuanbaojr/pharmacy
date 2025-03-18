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
        public Boolean IsBuy { get; set; }
        public string? Orderer { get; set; }
        public string? Consignee { get; set; }
        public string? OrderPhoneNum { get; set; }
        public string? ReceivePhoneNum { get; set; }
        public string? Note { get; set; }
        public string? PaymentMethod { get; set; }
    }
}
