using System;
using System.Collections.Generic;

namespace SneakerToGoAPI.Models
{
    public partial class Image
    {
        public int ImageId { get; set; }
        public string Path { get; set; } = null!;
        public string? Alt { get; set; }
        public string? IsDelete { get; set; }
        public int ModelId { get; set; }

        public virtual Model Model { get; set; } = null!;
    }
}
