using System;
using System.Collections.Generic;

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

        //public virtual Brand Brand { get; set; } = null!;
        //public virtual Category Category { get; set; } = null!;
        public virtual ICollection<Image> Images { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
