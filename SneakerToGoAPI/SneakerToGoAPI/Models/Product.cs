using System;
using System.Collections.Generic;

namespace SneakerToGoAPI.Models
{
    public partial class Product
    {
        public Product()
        {
            BillDetails = new HashSet<BillDetail>();
            CartDetails = new HashSet<CartDetail>();
        }

        public int ProductId { get; set; }
        public double Size { get; set; }
        public decimal Price { get; set; }
        public int QuanlityRemainning { get; set; }
        public string IsDelete { get; set; } = null!;
        public int ModelId { get; set; }
        public int CreateBy { get; set; }
        public DateTime CreateAt { get; set; }
        public int? UpdateBy { get; set; }
        public DateTime? UpdateAt { get; set; }

        public virtual Model Model { get; set; } = null!;
        public virtual ICollection<BillDetail> BillDetails { get; set; }
        public virtual ICollection<CartDetail> CartDetails { get; set; }
    }
}
