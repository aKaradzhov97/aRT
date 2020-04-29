namespace aRT.Web.Controllers
{
    using System;
    using System.Threading.Tasks;
    using aRT.Data.Models;
    using aRT.Services.Data.UsersService;
    using aRT.Web.ViewModels.Users;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("[auth]")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService usersService;
        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly UserManager<ApplicationUser> userManager;

        public UsersController(
            IUsersService usersService,
            SignInManager<ApplicationUser> signInManager,
            UserManager<ApplicationUser> userManager)
        {
            this.usersService = usersService;
            this.signInManager = signInManager;
            this.userManager = userManager;
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login(LoginInputViewModel login)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            var userLogin = await this.signInManager.PasswordSignInAsync(login.Username, login.Password, true, false);

            if (!userLogin.Succeeded)
            {
                return this.BadRequest("Invalid Username or password!");
            }

            return this.Accepted("Login", new { Message = $"{login.Username} is login!" });
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(RegisterInputViewModel register)
        {
            var user = new ApplicationUser
            {
                UserName = register.Username,
                Email = register.Email,
                PhoneNumber = register.PhoneNumber.ToString(),
                CreatedOn = DateTime.UtcNow,
            };

            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            if (await this.usersService.UsernameExists(register.Username))
            {
                return this.BadRequest("Username is already exists!");
            }

            if (await this.usersService.EmailExists(register.Email))
            {
                return this.BadRequest("Email is already exists!");
            }

            var newUser = await this.userManager.CreateAsync(user, register.Password);

            if (newUser.Succeeded)
            {
                await this.usersService.AddUserInRole(user.Id);
                return this.Created("Register", new { Message = $"User {register.Username} is created!" });
            }
            else
            {
                return this.Created("Register", new { Message = $"User {register.Username} is NOT create!" });
            }
        }
    }
}
