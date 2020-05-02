namespace aRT.Data.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class CategorySubCategory
    {
        public CategorySubCategory()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }

        [Required] public string CategoryId { get; set; }

        public Category Category { get; set; }

        [Required] public string SubCategoryId { get; set; }

        public SubCategory SubCategory { get; set; }
    }
}