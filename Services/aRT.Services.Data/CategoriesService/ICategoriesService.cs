namespace aRT.Services.Data.CategoriesService
{
    using System.Collections;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using aRT.Data.Models;
    using aRT.Web.ViewModels.Categories;

    public interface ICategoriesService
    {
        Task<IEnumerable<Category>> GetAllCategories();

        Task<Category> AddCategory(CategoriesInputViewModel category);

        Task<Category> EditProduct(CategoriesInputViewModel category);

        Task<Category> DeleteProduct(string productId);

        Task<IEnumerable<SubCategory>> GetAllSubCategories(string id);
    }
}