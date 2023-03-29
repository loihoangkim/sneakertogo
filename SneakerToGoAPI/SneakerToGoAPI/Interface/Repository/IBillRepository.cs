using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Repository
{
    public interface IBillRepository
    {
        IEnumerable<Bill>? GetAllBill();
        Bill GetBill(int id);
        string createBill(Bill bill);
        Bill? UpdateBill(Bill bill, int id);
        string deleteBill(int? id);
    }
}
