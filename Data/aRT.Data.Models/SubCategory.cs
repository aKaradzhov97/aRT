using System;
using System.Collections.Generic;

namespace aRT.Data.Models
{
    public class SubCategory
    {
        public SubCategory()
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