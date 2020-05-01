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
    [Route("product")]
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
        public async Task<ActionResult<IEnumerable<ProductsInputViewModel>>> All()
        {
            var data = await this.productsService.GetAllProducts();
            if (data.Count() == 0)
            {
                return this.NotFound("You dont have products!");
            }

            return this.Created("All", new {Message = "All product finded...", data});
        }

        [Authorize]
        [HttpPost("Create")]
        public async Task<ActionResult> Create(ProductsInputViewModel input)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var user = await this.userManager.GetUserAsync(this.User); // TO DO AddProduct(user.Id, input)!!!!!
            var data = await this.productsService.AddProduct(input);
            return this.CreatedAtAction("All",
                new {Message = $"{data.Name} with  price {data.Price} and {data.Quantity} created!", data});
        }

        [Authorize]
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
            return this.CreatedAtAction("All",
                new {Message = $"{data.Name} with price {data.Price} and {data.Quantity} changed!", data});
        }

        [Authorize]
        [HttpDelete("Delete/{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var data = await this.productsService.DeleteProduct(id);

            if (data == null)
            {
                return this.NotFound();
            }

            return this.CreatedAtAction("All", new {Message = "Product successfully deleted!", data});
        }
    }
}