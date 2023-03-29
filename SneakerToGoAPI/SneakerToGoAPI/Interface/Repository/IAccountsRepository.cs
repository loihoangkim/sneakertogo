using Microsoft.AspNetCore.Mvc;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Repository
{
    public interface IAccountsRepository
    {
        IEnumerable<Account>? GetAllAccount();
        string createAccount(Account account);
        Account? UpdateAccount(Account account, int id);
        string deleteAccount(int? id);
    }
}
