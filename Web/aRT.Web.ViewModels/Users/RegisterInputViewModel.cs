namespace aRT.Web.ViewModels.Users
{
    using System.ComponentModel.DataAnnotations;

    public class RegisterInputViewModel
    {
        [Required(ErrorMessage = "Username is Required.")]
        [Display(Name = "Username")]
        [StringLength(30, ErrorMessage = "Username must be between 5 and 30 characters long.", MinimumLength = 5)]
        [RegularExpression(@"^[A-z0-9]{5,30}$")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Email address is Required.")]
        [RegularExpression(@"^[A-z0-9\.]{3,30}\@[A-z]{3,11}\.[A-z]{2,7}$", ErrorMessage = "Invalid Email address!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Phone number is Required.")]
        [Phone]
        [RegularExpression("^[0]{1}[8]{1}[7-9]{1}[0-9]{7}$", ErrorMessage = "Your phone must be 10 digits and starting 087/088/089...")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Password is Required.")]
        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        [StringLength(30, ErrorMessage = "Password must be between 6 and 30 characters long", MinimumLength = 6)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Repeat Password is Required.")]
        [Display(Name = "Repeat password")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Passwords mismatch!")]
        public string RepeatPassword { get; set; }
    }
}
