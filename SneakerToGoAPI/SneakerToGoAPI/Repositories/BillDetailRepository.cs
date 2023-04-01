using Microsoft.EntityFrameworkCore;
using SneakerToGoAPI.Interface.Repository;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Repositories
{
    public class BillDetailRepository : IBillDetailRepository
    {
        private readonly SneakerToGoContext _context;
        public BillDetailRepository(SneakerToGoContext context) {
            _context = context;
        }   
        public string createBillDetail(BillDetail BillDetail)
        {
            throw new NotImplementedException();
        }

        public string deleteBillDetail(int? id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<BillDetail>? GetAllBillDetailByID(int id)
        {
            throw new NotImplementedException();
        }

        public BillDetail GetBillDetail(int id)
        {
            throw new NotImplementedException();
        }

        public BillDetail? UpdateBillDetail(BillDetail BillDetail, int id)
        {
            throw new NotImplementedException();
        }
    }
}
