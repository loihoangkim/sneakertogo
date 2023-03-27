﻿using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Interface
{
    public interface ICaterotyRepository
    {
        IEnumerable<Category>? GetAllCategory();
        Category GetCategories(int id);
        string createCategory(Category category);
        Category? UpdateCategory(Category category, int id);
        string deleteCategory(int? id);
    }
}