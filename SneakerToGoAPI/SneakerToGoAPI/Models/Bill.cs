using System;
using System.Collections.Generic;

namespace SneakerToGoAPI.Models
{
    public partial class Bill
    {
        public Bill()
        {
            BillDetails = new HashSet<BillDetail>();
        }

        public int BillId { get; set; }
        public int AccountId { get; set; }
        public decimal TotalPrice { get; set; }
        public string AddressOfReceiver { get; set; } = null!;
        public string PhoneOfReceiver { get; set; } = null!;
        public string StatusOfPayment { get; set; } = null!;
        public string? OrderStatus { get; set; }

        public virtual Account Account { get; set; } = null!;
        public virtual ICollection<BillDetail> BillDetails { get; set; }
    }
}
