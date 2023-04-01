using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Interface.Service;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Services
{
    public class BillService : IBillService
    {
        public BillService(IBillRepository billRepository) {
            _billRepository = billRepository;
        }

        public IBillRepository _billRepository;

        public int getIDBillByAccountID(int accountID)
        {
            throw new NotImplementedException();
        }
    }
}
