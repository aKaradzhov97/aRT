using Microsoft.EntityFrameworkCore.Internal;

namespace aRT.Web.Controllers
{
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using aRT.Data.Models;
    using aRT.Services.Data.CategoriesService;
    using aRT.Web.ViewModels.Categories;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoriesService categoriesService;
        private readonly UserManager<ApplicationUser> userManager;

        public CategoriesController(
            ICategoriesService categoriesService,
            UserManager<ApplicationUser> userManager)
        {
            this.categoriesService = categoriesService;
            this.userManager = userManager;
        }

        [HttpGet("AllCategories")]
        public async Task<ActionResult<IEnumerable<Category>>> AllCategories()
        {
            var data = await this.categoriesService.GetAllCategories();

            if (!data.Any())
            {
                return this.BadRequest("You dont have categories!");
            }

            return this.Created("AllCategories", new {Message = "All categories found...", data});
        }

        [HttpGet("AllSubCategories/{id}")]
        public async Task<ActionResult<IEnumerable<SubCategory>>> AllSubCategories(string id)
        {
            var data = await this.categoriesService.GetAllSubCategories(id);

            if (!data.Any())
            {
                return this.BadRequest("You dont have categories!");
            }

            return this.Created("AllSubCategories", new {Message = "All categories found...", data});
        }

        [HttpPost("Create")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult> Create(CategoriesInputViewModel input)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var data = await this.categoriesService.AddCategory(input);
            return this.CreatedAtAction(
                "AllCategories", new {Message = $"{data.Name} category created!", data});
        }

        [Authorize(Roles = "Administrator")]
        [HttpPut("Update/{id}")]
        public async Task<ActionResult> Edit(CategoriesInputViewModel edit)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var user = await this.userManager
                .GetUserAsync(this.User); // TO DO LOOK ProductsService and add userId EditProduct(user.id, edit);
            var data = await this.categoriesService.EditProduct(edit);
            return this.CreatedAtAction(
                "AllCategories",
                new {Message = $"{data.Name} category changed!", data});
        }

        [Authorize(Roles = "Administrator")]
        [HttpDelete("Delete/{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var data = await this.categoriesService.DeleteProduct(id);

            if (data == null)
            {
                return this.NotFound();
            }

            return this.CreatedAtAction("AllCategories", new {Message = "Product successfully deleted!", data});
        }
    }
}