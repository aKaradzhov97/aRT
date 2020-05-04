namespace aRT.Services.Data.UsersService
{
    using System.Threading.Tasks;
    using aRT.Data.Models;

    public interface IUsersService
    {
        Task<bool> UsernameExists(string username);

        Task<bool> EmailExists(string email);

        Task AddUserInRole(string id);

        Task<ApplicationUser> Authentication(string username, string password);
    }
}