namespace aRT.Services.Data.ProductsService
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using aRT.Data.Common.Repositories;
    using aRT.Data.Models;
    using aRT.Services.Mapping;
    using aRT.Web.ViewModels.Products;
    using Microsoft.EntityFrameworkCore;

    public class ProductsService : IProductsService
    {
        private readonly IRepository<Product> repositoryProduct;

        public ProductsService(IRepository<Product> repositoryProduct)
        {
            this.repositoryProduct = repositoryProduct;
        }

        public async Task<ProductsInputViewModel> AddProduct(string userId, ProductsInputViewModel product)
        {
            var currentProduct = await this.repositoryProduct.All()
                .FirstOrDefaultAsync(x => x.Name == product.Name && x.Price == product.Price);

            if (currentProduct == null)
            {
                currentProduct = new Product
                {
                    Name = product.Name,
                    Description = product.Description,
                    Image = product.Image,
                    Quantity = product.Quantity,
                    Price = product.Price,
                    Created_On = DateTime.UtcNow,
                    UserId = userId,
                };

                await this.repositoryProduct.AddAsync(currentProduct);
                await this.repositoryProduct.SaveChangesAsync();
            }

            return product;
        }

        public async Task<IEnumerable<ProductsInputViewModel>> GetAllProducts()
        {
            return await this.repositoryProduct.All().To<ProductsInputViewModel>().ToListAsync();
        }
    }
}
