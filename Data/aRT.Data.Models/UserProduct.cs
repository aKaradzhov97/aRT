using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace aRT.Data.Models
{
    public class UserProduct
    {
        public UserProduct()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        [Key]
        public string Id { get; set; }

        [Required]
        public string UserId { get; set; }

        public ApplicationUser User { get; set; }

        [Required]
        public string ProductId { get; set; }

        public Product Product { get; set; }

        public DateTime CreatedOn { get; set; }
    }
}
