namespace aRT.Data.Seeding
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using aRT.Data.Models;
    using Microsoft.EntityFrameworkCore;

    public class ProductsSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            if (await dbContext.Products.AnyAsync())
            {
                return;
            }

            var products = new List<(string Name, string Description, string Image, decimal Price, int Quantity)>
            {
                (
                    "Mens T-Shirt",
                    "Luftfilter, Ölfilter, Zündkerzen - die Marke *Champion* gehört zu den ganz großen der Szene.",
                    "https://cdn1.louis.de/dynamic/articles/o_pad,w_1800,h_1800,ha_center,va_center,c_fff/1c.01.32.D3ChampionTShirtWeiss21859427019.JPG",
                    22.50m,
                    10
                ),
                (
                    "Mens T-Shirt",
                    "Luftfilter, Ölfilter, Zündkerzen - die Marke *Champion* gehört zu den ganz großen der Szene.",
                    "https://cdn03.plentymarkets.com/j1rx4udxin3f/item/images/1601/full/Schwarz.jpg",
                    33.50m,
                    10
                ),
                (
                    "Mens T-Shirt - Nike",
                    "Luftfilter, Ölfilter, Zündkerzen - die Marke *Champion* gehört zu den ganz großen der Szene.",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e8vqdl1xb7maontxnbw2/sportswear-t-shirt-fur-babys-WLlSQR.jpg",
                    47.59m,
                    20
                ),
                (
                    "Mens T-Shirt Puma New Collection",
                    "Luftfilter, Ölfilter, Zündkerzen - die Marke *Champion* gehört zu den ganz großen der Szene.",
                    "https://kickz.akamaized.net/de/media/images/p/600/puma-Archive_Logo_T_Shirt-Puma_White-1.jpg",
                    44.79m,
                    20
                ),
                (
                    "Womens T-Shirt New Collection (2020)",
                    "",
                    "https://images-na.ssl-images-amazon.com/images/I/81hLKdZYpAL._AC_UY1000_.jpg",
                    19.89m,
                    20
                ),
                (
                    "Womens Sexy Prashchishta New Collection (2020)",
                    "Luftfilter, Ölfilter, Zündkerzen - die Marke *Champion* gehört zu den ganz großen der Szene.",
                    "https://cdn.shopify.com/s/files/1/2424/0679/products/386377FYB_OM_B_1024x1024.jpg?v=1553278833",
                    9.89m,
                    20
                ),
            };

            foreach (var product in products)
            {
                await dbContext.Products.AddAsync(new Product
                {
                    Name = product.Name,
                    Description = product.Description,
                    Image = product.Image,
                    Price = product.Price,
                    Quantity = product.Quantity,
                    Created_On = DateTime.UtcNow,
                });
            }
        }
    }
}