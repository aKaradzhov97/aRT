namespace aRT.Web.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using aRT.Data.Models;
    using aRT.Services.Data.CategoriesService;
    using aRT.Web.ViewModels.Categories;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoriesService categoriesService;

        public CategoriesController(ICategoriesService categoriesService)
        {
            this.categoriesService = categoriesService;
        }

        [HttpGet("AllCategories")]
        public async Task<ActionResult<IEnumerable<Category>>> AllCategories()
        {
            var data = await this.categoriesService.GetAllCategories();

            if (!data.Any())
            {
                return this.NotFound("You dont have categories!");
            }

            return this.Created("All", new {Message = "All categories finded...", data});
        }

        [HttpPost("Create")]
        public async Task<ActionResult> Create(CategoriesInputViewModel input)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var data = await this.categoriesService.AddProduct(input);
            return this.CreatedAtAction(
                "AllCategories", new {Message = $"{data.Name} category created!", data});
        }
    }
}