using System;
using System.Collections.Generic;

namespace SneakerToGoAPI.Models
{
    public partial class Brand
    {
        public Brand()
        {
            Models = new HashSet<Model>();
        }

        public int BrandId { get; set; }
        public string Name { get; set; } = null!;
        public string Descreption { get; set; } = null!;
        public string Banner { get; set; } = null!;
        public string Slug { get; set; } = null!;
        public DateTime CreateAt { get; set; }
        public int CreateBy { get; set; }
        public DateTime? UpdateAt { get; set; }
        public int UpdateBy { get; set; }

        public virtual ICollection<Model>? Models { get; set; }
    }
}
