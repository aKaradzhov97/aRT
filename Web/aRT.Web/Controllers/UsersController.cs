using Renci.SshNet.Messages;

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
    [Route("api/auth")]
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
            var data = await this.usersService.Authentication(login.Username, login.Password);

            if (!userLogin.Succeeded || data == null)
            {
                return this.BadRequest(new {Message = "Username or password is incorrect"});
            }

            return this.Ok(new {Message = "Token", data});
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(RegisterInputViewModel register)
        {
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

            var user = new ApplicationUser
            {
                UserName = register.Username,
                Email = register.Email,
                PhoneNumber = register.Phone.ToString(),
                CreatedOn = DateTime.UtcNow,
            };

            var newUser = await this.userManager.CreateAsync(user, register.Password);

            if (newUser.Succeeded)
            {
                await this.usersService.AddUserInRole(user.Id);
                return this.CreatedAtAction("Login", new {Message = $"User {register.Username} is created!"});
            }
            else
            {
                return this.BadRequest(new {Message = $"User {register.Username} is NOT create!"});
            }
        }
    }
}