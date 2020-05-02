namespace aRT.Data.Models
{
    using System;
    using System.Collections.Generic;

    public class Category
    {
        public Category()
        {
            this.Id = Guid.NewGuid().ToString();
            this.CategorySubCategories = new HashSet<CategorySubCategory>();
        }

        public string Id { get; set; }

        public string Name { get; set; }

        public DateTime Created_On { get; set; }

        public ICollection<CategorySubCategory> CategorySubCategories { get; set; }
    }
}