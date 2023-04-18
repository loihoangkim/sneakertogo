using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Interface.Service;
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

        public Account? GetAccount(int id)
        {
            return _accountsRepository.GetAccount(id);
        }

        public IEnumerable<Account>? GetAllAccount()
        {
            return _accountsRepository.GetAllAccount();
        }

        public int getNewCode()
        {
            return _accountsRepository.getNewCode();
        }

        public Account? UpdateAccount(Account account, int id)
        {
            return _accountsRepository.UpdateAccount(account, id);
        }
    }
}
