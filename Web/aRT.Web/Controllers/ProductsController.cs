namespace aRT.Web.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using aRT.Data.Models;
    using aRT.Services.Data.ProductsService;
    using aRT.Web.ViewModels.Products;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/product")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService productsService;
        private readonly UserManager<ApplicationUser> userManager;

        public ProductsController(
            IProductsService productsService,
            UserManager<ApplicationUser> userManager)
        {
            this.productsService = productsService;
            this.userManager = userManager;
        }

        [HttpGet("All")]
        public async Task<ActionResult<IEnumerable<ProductsInputViewModel>>> AllProduct()
        {
            var data = await this.productsService.GetAllProducts();
            if (!data.Any())
            {
                return this.NotFound("You dont have products!");
            }

            return this.CreatedAtAction("AllProduct", new {Message = "All product finded...", data});
        }

        [HttpPost("Search")]
        public async Task<ActionResult> Search(string search)
        {
            var data = await this.productsService.Search(search);
            if (!data.Any())
            {
                return this.NotFound("Not fount Products!");
            }

            return this.CreatedAtAction("AllProduct", new {Message = "All products finded...", data});
        }

        [Authorize(Roles = "Administrator")]
        [HttpPost("Create")]
        public async Task<ActionResult> Create(ProductsInputViewModel input)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var data = await this.productsService.AddProduct(input);
            return this.CreatedAtAction(
                "AllProduct",
                new {Message = $"{data.Name} with  price {data.Price} and {data.Quantity} created!", data});
        }

        [Authorize(Roles = "Administrator")]
        [HttpPut("Update/{id}")]
        public async Task<ActionResult> Edit(ProductsInputViewModel edit)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var user = await this.userManager
                .GetUserAsync(this.User); // TO DO LOOK ProductsService and add userId EditProduct(user.id, edit);
            var data = await this.productsService.EditProduct(edit);
            return this.CreatedAtAction(
                "AllProduct",
                new {Message = $"{data.Name} with price {data.Price} and {data.Quantity} changed!", data});
        }

        [Authorize(Roles = "Administrator")]
        [HttpDelete("Delete/{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var data = await this.productsService.DeleteProduct(id);

            if (data == null)
            {
                return this.NotFound();
            }

            return this.CreatedAtAction("AllProduct", new {Message = "Product successfully deleted!", data});
        }
    }
}