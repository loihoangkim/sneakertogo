using Microsoft.AspNetCore.Mvc;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Service
{
    public interface IAccountsService
    {
        IEnumerable<Account>? GetAllAccount();
        string createAccount(Account account);
        Account? UpdateAccount(Account account, int id);
        string deleteAccount(int? id);

        Account? GetAccount(int id);

    }
}
