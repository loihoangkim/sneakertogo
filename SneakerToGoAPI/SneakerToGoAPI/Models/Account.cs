using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace SneakerToGoAPI.Models
{
    public partial class Account
    {
        public Account()
        {
            Bills = new HashSet<Bill>();
            Carts = new HashSet<Cart>();
        }

        [JsonPropertyName("accountId")]
        public int AccountId { get; set; }

        [JsonPropertyName("name")]
        public string? Name { get; set; } = null!;

        [JsonPropertyName("userName")]
        public string UserName { get; set; } = null!;

        [JsonPropertyName("password")]
        public string Password { get; set; } = null!;

        [JsonPropertyName("email")]
        public string? Email { get; set; }

        [JsonPropertyName("phoneNumber")]
        public string? PhoneNumber { get; set; }

        [JsonPropertyName("role")]
        public int Role { get; set; }

        public virtual ICollection<Bill> Bills { get; set; }
        public virtual ICollection<Cart> Carts { get; set; }
    }
}
