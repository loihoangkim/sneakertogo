using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Models;
using SneakerToGoAPI.Services;
using SneakerToGoAPI.Interface.Service;
using System.Security.Principal;
using System.Web;
using SneakerToGoAPI.Entity;
using Microsoft.AspNetCore.Authorization;

namespace SneakerToGoAPI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        public readonly IAccountsService _accountService;

        public AccountsController(IAccountsService accountService)
        {
            _accountService = accountService;
        }


        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public IActionResult Login([FromBody] AuthenticationRequest authenticationRequest)
        {

            try
            {
                var jwtAuthenticationManager = new JwtAuthenticationManager(_accountService);
                var authResult = jwtAuthenticationManager.Authenticate(authenticationRequest.UserName, authenticationRequest.Password);
                if (authResult == null)
                {
                    return Unauthorized();
                }
                else
                    return Ok(authResult);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest, ex.Message);
            }
        }

        // GET: api/Accounts
        [HttpGet]
        public IActionResult GetAllAccounts()
        {
            try
            {
                var result = _accountService.GetAllAccount();

                // Xử lý trả về của DB
                if (result != null)
                {
                    return StatusCode(StatusCodes.Status200OK, result);
                }
                return StatusCode(StatusCodes.Status200OK, "No record");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest, ex.Message);
            }
        }

        //GET: api/Accounts/5
        [HttpGet("{id}")]
        public Account? GetAccount(int id)
        {
            try
            {
                var result = _accountService.GetAccount(id);
                if (result != null)
                {
                    return result;
                }
                else return null;
            }
            catch (Exception)
            {

                throw;
            }
        }

        // PUT: api/Accounts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutAccount(int id, Account account)
        {
            try
            {
                var result = _accountService.UpdateAccount(account, id);

                // Xử lý trả về của DB
                if (result != null)
                {
                    return StatusCode(StatusCodes.Status200OK, result);
                }
                return StatusCode(StatusCodes.Status400BadRequest, "e002");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "e001");
            }
        }

        // POST: api/Accounts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public IActionResult PostAccount(Account account)
        {
            try
            {
                var result = _accountService.createAccount(account);

                // Xử lý trả về của DB
                if (result != null)
                {
                    return StatusCode(StatusCodes.Status201Created, result);

                }
                return StatusCode(StatusCodes.Status400BadRequest, "e002");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest, ex.Message);
            }

        }

        // DELETE: api/Accounts/5
        [HttpDelete("{id}")]
        public IActionResult DeleteAccount(int id)
        {
            try
            {
                var result = _accountService.deleteAccount(id);

                // Xử lý giá trị trả về từ db
                if (result != null)
                {
                    return StatusCode(StatusCodes.Status200OK, result);
                }
                return StatusCode(StatusCodes.Status400BadRequest, "e002");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "e001");
            }
        }

    }
}
