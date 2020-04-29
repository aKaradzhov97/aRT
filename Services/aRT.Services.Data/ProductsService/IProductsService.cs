namespace aRT.Services.Data.ProductsService
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using aRT.Web.ViewModels.Products;

    public interface IProductsService
    {
        Task<IEnumerable<ProductsInputViewModel>> GetAllProducts();

        Task<ProductsInputViewModel> AddProduct(string userId, ProductsInputViewModel product);
    }
}
