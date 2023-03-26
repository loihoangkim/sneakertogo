using SneakerToGoAPI.Interface;
using SneakerToGoAPI.Models;
using SneakerToGoAPI.Repositories;

namespace SneakerToGoAPI.Services
{
    public class AccountsService : IAccountsService
    {
        public IAccountsRepository _accountsRepository;
        public AccountsService(IAccountsRepository accountsRepository)
        {
            _accountsRepository = accountsRepository;
        }

        public string createAccount(Account account)
        {
            return _accountsRepository.createAccount(account);
        }

        public string deleteAccount(int? id)
        {
            return _accountsRepository.deleteAccount(id);
        }

        public IEnumerable<Account>? GetAllAccount()
        {
            return _accountsRepository.GetAllAccount();
        }

        public Account? UpdateAccount(Account account, int id)
        {
            throw new NotImplementedException();
        }
    }
}
