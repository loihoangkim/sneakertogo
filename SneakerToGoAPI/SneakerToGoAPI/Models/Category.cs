using System;
using System.Collections.Generic;

namespace SneakerToGoAPI.Models
{
    public partial class Category
    {
        public Category()
        {
            Models = new HashSet<Model>();
        }

        public int CategoryId { get; set; }
        public string Name { get; set; } = null!;
        public string Slug { get; set; } = null!;
        public string? IsDelete { get; set; }

        public virtual ICollection<Model> Models { get; set; }
    }
}
