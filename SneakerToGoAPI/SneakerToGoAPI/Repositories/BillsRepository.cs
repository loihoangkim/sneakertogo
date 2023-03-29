using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Repositories
{
    public class BillsRepository : IBillRepository
    {
        public string createBill(Bill bill)
        {
            throw new NotImplementedException();
        }

        public string createBillDetail(BillDetail BillDetail)
        {
            throw new NotImplementedException();
        }

        public string deleteBill(int? id)
        {
            throw new NotImplementedException();
        }

        public string deleteBillDetail(int? id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Bill>? GetAllBill()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<BillDetail>? GetAllBillDetailByID(int id)
        {
            throw new NotImplementedException();
        }

        public Bill GetBill(int id)
        {
            throw new NotImplementedException();
        }

        public BillDetail GetBillDetail(int id)
        {
            throw new NotImplementedException();
        }

        public Bill? UpdateBill(Bill bill, int id)
        {
            throw new NotImplementedException();
        }

        public BillDetail? UpdateBillDetail(BillDetail BillDetail, int id)
        {
            throw new NotImplementedException();
        }
    }
}
