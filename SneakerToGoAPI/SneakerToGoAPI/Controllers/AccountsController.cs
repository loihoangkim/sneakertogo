using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Models;
using SneakerToGoAPI.Interface;
using SneakerToGoAPI.Services;

namespace SneakerToGoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        public AccountsController(AccountsService accountService)
        {
            _accountService = accountService;
        }
        public AccountsService _accountService;


        // GET: api/Accounts
        [HttpGet]
        public IActionResult GetAccounts()
        {
            try
            {
                var result = _accountService.GetAllAccount();

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

        // GET: api/Accounts/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Account>> GetAccount(int id)
        //{
        //  if (_context.Accounts == null)
        //  {
        //      return NotFound();
        //  }
        //    var account = await _context.Accounts.FindAsync(id);

        //    if (account == null)
        //    {
        //        return NotFound();
        //    }

        //    return account;
        //}

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
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "e001");
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
