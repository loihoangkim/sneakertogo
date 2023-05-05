using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SneakerToGoAPI.Models
{
    public partial class Product
    {
        public Product()
        {
            
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

        [Column(TypeName = "decimal")]
        [JsonPropertyName("priceFake")]
        public decimal? PriceFake { get; set; }

        [Column(TypeName = "decimal")]
        [JsonPropertyName("ImportPrice")]
        public decimal ImportPrice { get; set; }

        //public virtual Model Model { get; set; } = null!;

    }
}
