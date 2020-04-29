namespace aRT.Web.ViewModels.Products
{
    using System;
    using System.ComponentModel.DataAnnotations;

    using aRT.Data.Models;
    using aRT.Services.Mapping;

    public class ProductsInputViewModel : IMapFrom<Product>
    {
        public string Id { get; set; }

        [Required(ErrorMessage = "Product name is required!")]
        [StringLength(200, ErrorMessage = "Product name must be between 6 and 200 characters long!", MinimumLength = 6)]
        [Display(Name = "Product name")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Product description is required!")]
        [StringLength(4000, ErrorMessage = "Product description must be between 20 and 4 000 characters long!", MinimumLength = 20)]
        public string Description { get; set; }

        [Required(ErrorMessage = "Product ImageUrl is required!")]
        public string Image { get; set; }

        [Required(ErrorMessage = "Product price is required!")]
        [Range(0.01, 10000.00, ErrorMessage = "Product price must be between 0.01 and 10 000.00!")]
        public decimal Price { get; set; }

        [Required(ErrorMessage = "Product quantity is required!")]
        [Range(1, 10000, ErrorMessage = "Product quantity must be between 1 and 10 000!")]
        public int Quantity { get; set; }

        public DateTime Created_On { get; set; }
    }
}
