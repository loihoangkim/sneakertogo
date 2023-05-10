using System;
using System.Collections.Generic;

namespace SneakerToGoAPI.Models
{
    public partial class BillDetail
    {
        public int BillId { get; set; }
        public int ProductId { get; set; }
        public int ModelId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }

        //public virtual Bill Bill { get; set; } = null!;
        //public virtual Product Product { get; set; } = null!;
    }
}
