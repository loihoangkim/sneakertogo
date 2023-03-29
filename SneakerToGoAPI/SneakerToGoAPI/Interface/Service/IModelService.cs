using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface.Service
{
    public interface IModelService
    {
        IEnumerable<Model>? GetAllModel();
        Model GetModel(int id);
        string createModel(Model model);
        Model? UpdateModel(Model model, int id);
        string deleteModel(int? id);
    }
}
