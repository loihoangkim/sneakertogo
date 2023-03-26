using System;
using System.Collections.Generic;

namespace SneakerToGoAPI.Models
{
    public partial class Account
    {
        public Account()
        {
            Bills = new HashSet<Bill>();
            Carts = new HashSet<Cart>();
        }

        public int AccountId { get; set; }
        public string Name { get; set; } = null!;
        public string UserName { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public int Role { get; set; }

        public virtual ICollection<Bill> Bills { get; set; }
        public virtual ICollection<Cart> Carts { get; set; }
    }
}
