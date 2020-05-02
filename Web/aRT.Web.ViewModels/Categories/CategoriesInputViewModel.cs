namespace aRT.Web.ViewModels.Categories
{
    using System;
    using System.ComponentModel.DataAnnotations;

    using aRT.Data.Models;
    using aRT.Services.Mapping;

    public class CategoriesInputViewModel : IMapFrom<Category>
    {
        public string Id { get; set; }

        [Required]
        [StringLength(40, ErrorMessage = "Category name must be between 3 and 40 characters long!", MinimumLength = 3)]
        public string Name { get; set; }

        public DateTime Created_On { get; set; }
    }
}