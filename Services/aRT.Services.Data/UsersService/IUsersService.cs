namespace aRT.Services.Data.UsersService
{
    using System.Threading.Tasks;

    using aRT.Web.ViewModels.Users;

    public interface IUsersService
    {
        Task<bool> UsernameExists(string username);

        Task<bool> EmailExists(string email);

        Task AddUserInRole(string id);

        Task<string> Authentication(string username, string password);
    }
}