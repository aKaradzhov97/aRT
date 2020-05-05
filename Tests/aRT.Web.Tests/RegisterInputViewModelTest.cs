namespace aRT.Web.Tests
{
    using System;
    using System.Text.RegularExpressions;

    using aRT.Data.Models;
    using aRT.Web.ViewModels.Users;
    using Microsoft.AspNetCore.Identity;
    using Xunit;

    public class RegisterInputViewModelTest
    {
        [Theory]
        [InlineData("admin")]
        [InlineData("administrator")]
        [InlineData("wowbeat")]
        [InlineData("losthell")]
        [InlineData("zodiaka")]
        public void ValidUsername(string username)
        {
            // Activate
            var validationUser = new RegisterInputViewModel();

            // Act
            var result = validationUser.Username = username;

            // Assert
            Assert.True(result.Length >= 5 && result.Length <= 30);
        }

        [Theory]
        [InlineData("admin@admin.com")]
        [InlineData("localhost@admin.com")]
        [InlineData("wowbeat@gmail.com")]
        [InlineData("niki@gmail.com")]
        [InlineData("peter@yahoo.com")]
        public void ValidEmail(string email)
        {
            var patternEmail = @"^[A-z0-9\.]{3,30}\@[A-z]{3,11}\.[A-z]{2,7}$";
            Regex regex = new Regex(patternEmail);
            bool isValid = regex.IsMatch(email);

            // Assert
            Assert.True(isValid);
        }

        [Theory]
        [InlineData("0891234567")]
        [InlineData("0881234567")]
        [InlineData("0871234567")]
        public void ValidPhone(string phone)
        {
            // Act
            var patternPhone = @"^[0]{1}[8]{1}[7-9]{1}[0-9]{7}$";
            Regex regex = new Regex(patternPhone);
            bool isValid = regex.IsMatch(phone);

            // Assert
            Assert.True(isValid);
        }

        [Theory]
        [InlineData("password")]
        [InlineData("newpassword")]
        [InlineData("password123")]
        [InlineData("myNewPassword")]
        [InlineData("myNewPassword!")]
        public void ValidPassword(string password)
        {
            // Activate
            var validationPassword = new RegisterInputViewModel();

            // Act
            var result = validationPassword.Password = password;

            // Assert
            Assert.True(result.Length >= 6 && result.Length <= 30);
        }

        [Fact]
        public void ValidUser()
        {
            // Activate
            DateTime date = new DateTime(2020, 1, 1);
            var passwordHasher = new PasswordHasher<ApplicationUser>();

            var user = new ApplicationUser
            {
                UserName = "admin",
                PhoneNumber = "0877711465",
                Email = "admin@admina.com",
                CreatedOn = date,
            };
            var hashedPassword = passwordHasher.HashPassword(user, "password");

            user.PasswordHash = hashedPassword;

            // Assert
            Assert.True(user.UserName != null &&
                        user.PhoneNumber.Length == 10 &&
                        user.Email != null &&
                        user.CreatedOn != null &&
                        user.PasswordHash == hashedPassword &&
                        hashedPassword != null &&
                        user.PasswordHash != null);
        }
    }
}