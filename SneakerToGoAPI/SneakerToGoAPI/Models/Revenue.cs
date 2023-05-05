using MessagePack;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SneakerToGoAPI.Models
{
    public partial class Revenue
    {
        [JsonPropertyName("Id")]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "datetime")]
        [JsonPropertyName("date")]
        public DateTime date { get; set; }


        [JsonPropertyName("totalRevenueOfDay")]
        [Column(TypeName = "decimal")]
        public decimal totalRevenueOfDay { get; set; } = 0;

        [JsonPropertyName("totalSalesOfDay")]
        [Column(TypeName = "decimal")]
        public decimal totalSalesOfDay { get; set; } = 0;

        [Column(TypeName = "decimal")]
        [JsonPropertyName("totalOrder")] public decimal totalOrder { get; set; } = 0;

        public Revenue() { }
    }
}
