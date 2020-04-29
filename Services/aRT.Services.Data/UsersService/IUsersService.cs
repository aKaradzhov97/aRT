namespace aRT.Services.Data.UsersService
{
    using System.Threading.Tasks;

    public interface IUsersService
    {
        Task<bool> UsernameExists(string username);

        Task<bool> EmailExists(string email);

        Task AddUserInRole(string id);
    }
}
