using System;

namespace SneakerToGoAPI.Entity
{
    [Serializable]
    public class JwtAuthResponse
    {
        public string hoTen { get; set; }

        public string token { get; set; }
        public string user_name { get; set; }
        public string role { get; set; }
        public int expires_in { get; set; }

        public int userId { get; set;}

    }
}
