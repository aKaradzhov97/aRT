namespace aRT.Services.Data.CategoriesService
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using aRT.Data.Common.Repositories;
    using aRT.Data.Models;
    using aRT.Web.ViewModels.Categories;
    using Microsoft.EntityFrameworkCore;

    public class CategoriesService : ICategoriesService
    {
        private readonly IRepository<Category> repositoryCategories;

        public CategoriesService(IRepository<Category> repositoryCategories)
        {
            this.repositoryCategories = repositoryCategories;
        }

        public async Task<IEnumerable<Category>> GetAllCategories()
        {
            return await this.repositoryCategories.All().ToListAsync();
        }

        public async Task<Category> AddCategory(CategoriesInputViewModel category)
        {
            var currentCategory = await this.repositoryCategories.All()
                .FirstOrDefaultAsync(x => x.Name == category.Name);

            if (currentCategory == null)
            {
                currentCategory = new Category
                {
                    Name = category.Name,
                    Created_On = DateTime.UtcNow,
                };

                await this.repositoryCategories.AddAsync(currentCategory);
                await this.repositoryCategories.SaveChangesAsync();
            }

            return currentCategory;
        }

        public async Task<Category> EditProduct(CategoriesInputViewModel category)
        {
            var currentCategory = await this.repositoryCategories.All().FirstOrDefaultAsync(x => x.Id == category.Id);

            if (currentCategory != null)
            {
                this.repositoryCategories.Delete(currentCategory);

                currentCategory = new Category
                {
                    Id = category.Id,
                    Name = category.Name,
                    Created_On = DateTime.UtcNow,
                };

                await this.repositoryCategories.AddAsync(currentCategory);
                await this.repositoryCategories.SaveChangesAsync();
            }

            return currentCategory;
        }

        public async Task<Category> DeleteProduct(string productId)
        {
            var currentProduct = await this.repositoryCategories.All().FirstOrDefaultAsync(x => x.Id == productId);

            if (currentProduct != null)
            {
                this.repositoryCategories.Delete(currentProduct);
                await this.repositoryCategories.SaveChangesAsync();
                return currentProduct;
            }

            return null;
        }
    }
}