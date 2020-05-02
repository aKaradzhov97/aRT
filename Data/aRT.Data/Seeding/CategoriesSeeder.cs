using System.Collections.Generic;
using aRT.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace aRT.Data.Seeding
{
    using System;
    using System.Threading.Tasks;

    public class CategoriesSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            if (await dbContext.Categories.AnyAsync())
            {
                return;
            }

            var categories = new List<string>()
            {
                "Mens",
                "Womens",
                "Kids",
            };

            foreach (var category in categories)
            {
                await dbContext.Categories.AddAsync(new Category
                {
                    Name = category,
                    Created_On = DateTime.UtcNow,
                });
            }
        }
    }
}