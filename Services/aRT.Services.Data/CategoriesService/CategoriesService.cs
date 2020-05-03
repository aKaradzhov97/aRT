namespace aRT.Services.Data.CategoriesService
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using aRT.Data.Common.Repositories;
    using aRT.Data.Models;
    using aRT.Web.ViewModels.Categories;
    using Microsoft.EntityFrameworkCore;

    public class CategoriesService : ICategoriesService
    {
        private readonly IRepository<Category> repositoryCategories;
        private readonly IRepository<CategorySubCategory> repositoryCategorySubCategories;

        public CategoriesService(
            IRepository<Category> repositoryCategories,
            IRepository<CategorySubCategory> repositoryCategorySubCategories)
        {
            this.repositoryCategories = repositoryCategories;
            this.repositoryCategorySubCategories = repositoryCategorySubCategories;
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

        public async Task<IEnumerable<SubCategory>> GetAllSubCategories(string id)
        {
            var currentSubCategoriesInCategory = await this.repositoryCategorySubCategories.All()
                .Where(x => x.CategoryId == id)
                .Select(x => new SubCategory()
                {
                    Id = x.SubCategory.Id,
                    Name = x.SubCategory.Name,
                    Created_On = x.SubCategory.Created_On,
                })
                .ToListAsync();

            return currentSubCategoriesInCategory;
        }
    }
}