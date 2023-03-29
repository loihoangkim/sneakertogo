using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Repositories
{
    public class AccountsRepository : IAccountsRepository
    {
        //SqlConnection MySqlConnector;
        //IConfiguration _cofiguration;
        private readonly SneakerToGoContext _context;


        public AccountsRepository(SneakerToGoContext context)
        {
            _context = context;
        }

        public string createAccount(Account account)
        {
            _context.Accounts.Add(account);
            try
            {
                _context.SaveChangesAsync();
                return "Thêm thành công";
            }
            catch (DbUpdateException)
            {
                if (AccountExists(account.AccountId))
                {
                    return "Trùng tài khoản";
                }
                else
                {
                    throw;
                }
            }
        }

        public string deleteAccount(int? id)
        {
            if (_context.Accounts == null)
            {
                return "Danh sách tài khoản trống";
            }
            var account =  _context.Accounts.FirstOrDefault( a => a.AccountId.Equals(id) );
            if (account == null)
            {
                return "Không tìm được tài khoản cần tìm";
            }
            _context.Accounts.Remove(account);
            _context.SaveChangesAsync();

            return "Xóa thành công tài khoản cần tìm";
        }

        public  IEnumerable<Account>? GetAllAccount()
        {
            if (_context.Accounts == null)
            {
                return null;
            }
            return _context.Accounts.ToList();
        }

        public  Account? UpdateAccount(Account account, int id)
        {
            if (id != account.AccountId)
            {
                return null;
            }
            _context.Entry(account).State = EntityState.Modified;

            try
            {
                _context.SaveChangesAsync();
                return account;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
        }

        private bool AccountExists(int id)
        {
            return (_context.Accounts?.Any(e => e.AccountId == id)).GetValueOrDefault();
        }
    }
}
