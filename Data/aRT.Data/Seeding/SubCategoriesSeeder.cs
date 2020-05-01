namespace aRT.Data.Seeding
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using aRT.Data.Models;
    using Microsoft.EntityFrameworkCore;

    public class SubCategoriesSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            if (await dbContext.SubCategories.AnyAsync())
            {
                return;
            }

            var subCategories = new List<string>()
            {
                "T-Shirts",
                "Trainers",
                "Hoodies",
                "Pants",
                "Gloves"
            };

            foreach (var subCategory in subCategories)
            {
                await dbContext.SubCategories.AddAsync(new SubCategory
                {
                    Name = subCategory,
                    Created_On = DateTime.UtcNow,
                });
            }
        }
    }
}