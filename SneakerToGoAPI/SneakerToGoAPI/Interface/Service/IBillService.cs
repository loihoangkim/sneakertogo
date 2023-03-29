using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Service
{
    public interface IBillService
    {
        IEnumerable<Bill>? GetAllBill();
        Bill GetBill(int id);
        string createBill(Bill bill);
        Bill? UpdateBill(Bill bill, int id);
        string deleteBill(int? id);
    }
}
