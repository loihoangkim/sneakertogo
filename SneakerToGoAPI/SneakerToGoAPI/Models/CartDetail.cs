using System;
using System.Collections.Generic;

namespace SneakerToGoAPI.Models
{
    public partial class CartDetail
    {
        public int CardId { get; set; }
        public int ProductId { get; set; }
        public int ModelId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }

        public virtual Cart Card { get; set; } = null!;
        public virtual Product Product { get; set; } = null!;
    }
}
