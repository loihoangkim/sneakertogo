using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Repositories
{
    public class BillsRepository : IBillRepository
    {
        private readonly SneakerToGoContext _context;

        public BillsRepository(SneakerToGoContext context)
        {
            _context = context;
        }
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
            if (_context.Bills == null)
            {
                return null;
            }
            return  _context.Bills.ToList();
        }

        public IEnumerable<BillDetail>? GetAllBillDetailByID(int id)
        {
            throw new NotImplementedException();
        }

        public Bill? GetBill(int id)
        {
            if (_context.Bills == null)
            {
                return null;
            }
            var bill =  _context.Bills.FirstOrDefault( b => b.BillId.Equals(id));

            if (bill == null)
            {
                return null;
            }

            return bill;
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
