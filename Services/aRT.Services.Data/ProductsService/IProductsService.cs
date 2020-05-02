namespace aRT.Services.Data.ProductsService
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using aRT.Data.Models;
    using aRT.Web.ViewModels.Products;

    public interface IProductsService
    {
        Task<IEnumerable<ProductsInputViewModel>> GetAllProducts();

        Task<Product> AddProduct(ProductsInputViewModel product);

        Task<Product> EditProduct(ProductsInputViewModel product);

        Task<Product> DeleteProduct(string productId);

        Task<IEnumerable<Product>> Search(string productName);
    }
}