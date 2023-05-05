using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SneakerToGoAPI.Models
{
    public partial class Model
    {
        public Model()
        {
            Images = new HashSet<Image>();
            Products = new HashSet<Product>();
        }

        public int ModelId { get; set; }
        public string Name { get; set; } = null!;
        public string? Descreption { get; set; } = null!;

        public int? IsDelete { get; set; }
        // public string IsDelete { get; set; }

        public int? BrandId { get; set; }
        public int? CategoryId { get; set; }
        public int? CreateBy { get; set; }
        public DateTime CreateAt { get; set; }
        public int? UpdateBy { get; set; }
        public DateTime? UpdateAt { get; set; }

        [Column(TypeName = "int")]
        [JsonPropertyName("totalQuantity")]
        public int totalQuantity { get; set; }

        [Column(TypeName = "int")]
        [JsonPropertyName("totalOrder")]
        public int totalOrder { get; set; }

        [Column(TypeName = "decimal")]
        [JsonPropertyName("totalRevenue")]
        public decimal totalRevenue { get; set; }

        [Column(TypeName = "decimal")]
        [JsonPropertyName("totalSales")]
        public decimal totalSales { get; set; }

        public virtual ICollection<Image> Images { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
