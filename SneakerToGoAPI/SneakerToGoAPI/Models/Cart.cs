using System;
using System.Collections.Generic;

namespace SneakerToGoAPI.Models
{
    public partial class Cart
    {
        //public Cart()
        //{
        //    CartDetails = new HashSet<CartDetail>();
        //}

        public int CardId { get; set; }
        public decimal TotalPrice { get; set; }
        public string Status { get; set; } = null!;
        public string? Note { get; set; }
        public int AccountId { get; set; }

        // public virtual Account? Account { get; set; } = null!;
        //public virtual ICollection<CartDetail> CartDetails { get; set; }
    }
}
