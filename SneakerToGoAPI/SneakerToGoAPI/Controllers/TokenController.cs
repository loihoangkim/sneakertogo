using SneakerToGoAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace JWTAuth.WebApi.Controllers
{
    [Route("api/token")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly SneakerToGoContext _context;

        public TokenController(IConfiguration config, SneakerToGoContext context)
        {
            _configuration = config;
            _context = context;
        }

        [HttpPut]
        public async Task<IActionResult> Post(string userName, string password)
        {
            if (userName != null && password != null)
            {
                var user = await GetUser(userName, password, Get_context());

                if (user != null)
                {
                    //create claims details based on the user information
                    var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("AccountId", user.AccountId.ToString()),
                        new Claim("UserName", user.UserName),
                        new Claim("Role", user.Role.ToString())
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(
                        _configuration["Jwt:Issuer"],
                        _configuration["Jwt:Audience"],
                        claims,
                        expires: DateTime.UtcNow.AddMinutes(10),
                        signingCredentials: signIn);

                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return BadRequest("Invalid credentials");
                }
            }
            else
            {
                return BadRequest();
            }
        }



        private SneakerToGoContext Get_context()
        {
            return _context;
        }

        private async Task<Account> GetUser(string username, string password, SneakerToGoContext _context)
        {
            return await _context.Accounts.FirstOrDefaultAsync(u => u.UserName == username && u.Password == password);
        }
    }
}