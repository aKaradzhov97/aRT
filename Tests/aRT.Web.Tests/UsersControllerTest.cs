using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using aRT.Data.Common.Repositories;
using aRT.Data.Models;
using aRT.Services.Data.UsersService;
using aRT.Web.Controllers;
using aRT.Web.Infrastructure.Jwt;
using aRT.Web.ViewModels.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Xunit;

namespace aRT.Web.Tests
{
    public class UsersControllerTest
    {
        [Fact]
        public void TestWhatReturnUsersController()
        {
            var controller = new UsersController(new MockUsersService(),
                null,
                null);

            var newCorrectRegister = new RegisterInputViewModel();
            newCorrectRegister.Username = "admin";
            newCorrectRegister.Email = "admin@admin.com";
            newCorrectRegister.Phone = "0877711475";
            newCorrectRegister.Password = "admina";
            newCorrectRegister.RepeatPassword = "admina";

            var result = controller.Register(newCorrectRegister);
            Assert.True(result.IsCompleted);
        }
    }

    public class User
    {
        public string Username { get; set; }

        public string Email { get; set; }
    }

    public class MockUsersService : IUsersService
    {
        public List<User> GetUsers()
        {
            return new List<User>
            {
                new User
                {
                    Username = "Ivancho",
                    Email = "admin@admin.com",
                },
                new User
                {
                    Username = "admin",
                    Email = "admin@admina.com",
                }
            };
        }

        public async Task AddUserInRole(string id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<string> Authentication(string username)
        {
            throw new System.NotImplementedException();
        }


        public async Task<bool> EmailExists(string email)
        {
            return this.GetUsers().Any(x => x.Email == email);
        }

        public async Task<bool> UsernameExists(string username)
        {
            return this.GetUsers().Any(x => x.Username == username);
        }
    }
}