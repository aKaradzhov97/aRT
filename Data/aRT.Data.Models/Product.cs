﻿namespace aRT.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Product
    {
        public Product()
        {
            this.Id = Guid.NewGuid().ToString();
            this.UserProducts = new HashSet<UserProduct>();
        }

        [Key] public string Id { get; set; }

        [Required] [MaxLength(200)] public string Name { get; set; }

        [Required] [MaxLength(4000)] public string Description { get; set; }

        [Required] public string Image { get; set; }

        [Required] [Range(0.01, 10000.00)] public decimal Price { get; set; }

        [Required] [Range(0, 10000)] public int Quantity { get; set; }

        [Required] public DateTime Created_On { get; set; }

        // [Required] public string SubCategoryId { get; set; }
        // public SubCategory SubCategory { get; set; }

        public ICollection<UserProduct> UserProducts { get; set; }
    }
}