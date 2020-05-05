namespace aRT.Web.Tests
{
    using aRT.Web.ViewModels.Users;
    using Xunit;

    public class LoginInputViewModelTest
    {
        [Fact]
        public void UsernameAndPasswordShouldBeInRanger()
        {
            // Activate
            var validationUser = new LoginInputViewModel();

            // Act
            var username = validationUser.Username = "admin";
            var password = validationUser.Password = "admina";

            // Assert
            Assert.True(username.Length >= 5 && username.Length <= 30);
            Assert.True(password.Length >= 6 && password.Length <= 30);
        }

        [Theory]
        [InlineData("")]
        [InlineData(" ")]
        [InlineData("admi")]
        [InlineData("asdfghfdsadfgdsafgdsafgdssafgdssafsfdfdsasdfg")]
        public void InvalidUsernameAndPassword(string user)
        {
            // Arrange
            var invalidUser = new LoginInputViewModel();

            // Act
            var username = invalidUser.Username = user;
            var password = invalidUser.Password = user;

            // Assert
            Assert.False(username.Length >= 5 && username.Length <= 30);
            Assert.False(password.Length >= 6 && password.Length <= 30);
        }
    }
}