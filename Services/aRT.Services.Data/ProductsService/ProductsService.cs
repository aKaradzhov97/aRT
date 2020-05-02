using System.Linq;

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

        public async Task<Product> AddProduct(ProductsInputViewModel product)
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
                };

                await this.repositoryProduct.AddAsync(currentProduct);
                await this.repositoryProduct.SaveChangesAsync();
            }

            return currentProduct;
        }

        // TO DO add and userId (string userId, ProductsInputViewModel product)
        public async Task<Product> EditProduct(ProductsInputViewModel product)
        {
            var currentProduct = await this.repositoryProduct.All().FirstOrDefaultAsync(x => x.Id == product.Id);

            if (currentProduct != null)
            {
                this.repositoryProduct.Delete(currentProduct);

                currentProduct = new Product
                {
                    Id = product.Id,
                    Name = product.Name,
                    Description = product.Description,
                    Image = product.Image,
                    Price = product.Price,
                    Quantity = product.Quantity,
                    Created_On = DateTime.UtcNow,
                };

                await this.repositoryProduct.AddAsync(currentProduct);
                await this.repositoryProduct.SaveChangesAsync();
            }

            return currentProduct;
        }

        public async Task<Product> DeleteProduct(string productId)
        {
            var currentProduct = await this.repositoryProduct.All().FirstOrDefaultAsync(x => x.Id == productId);

            if (currentProduct != null)
            {
                this.repositoryProduct.Delete(currentProduct);
                await this.repositoryProduct.SaveChangesAsync();
                return currentProduct;
            }

            return null;
        }

        public async Task<IEnumerable<Product>> Search(string productName)
        {
            var currentProduct = await this.repositoryProduct.All()
                .Where(x => x.Name == productName).ToListAsync();

            return currentProduct;
        }

        public async Task<IEnumerable<ProductsInputViewModel>> GetAllProducts()
        {
            return await this.repositoryProduct.All().To<ProductsInputViewModel>().ToListAsync();
        }
    }
}