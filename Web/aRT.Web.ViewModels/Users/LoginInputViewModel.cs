namespace aRT.Web.ViewModels.Users
{
    using System.ComponentModel.DataAnnotations;

    public class LoginInputViewModel
    {
        [Required(ErrorMessage = "Username is Required.")]
        [Display(Name = "Username")]
        [StringLength(30, ErrorMessage = "Invalid username, please try again!", MinimumLength = 5)]
        [RegularExpression(@"^[A-z0-9]{5,30}$")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is Required.")]
        [DataType(DataType.Password)]
        [StringLength(30, ErrorMessage = "Invalid password, please try again!", MinimumLength = 6)]
        public string Password { get; set; }
    }
}