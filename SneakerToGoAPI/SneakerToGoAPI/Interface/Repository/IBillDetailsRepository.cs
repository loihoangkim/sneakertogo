using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Repository
{
    public interface IBillDetailRepository
    {
        IEnumerable<BillDetail>? GetAllBillDetailByID(int id);
        BillDetail GetBillDetail(int id);
        string createBillDetail(BillDetail BillDetail);
        BillDetail? UpdateBillDetail(BillDetail BillDetail, int id);
        string deleteBillDetail(int? id);
    }
}
