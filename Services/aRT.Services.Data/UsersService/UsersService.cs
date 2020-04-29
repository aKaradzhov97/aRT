namespace aRT.Services.Data.UsersService
{
    using System.Threading.Tasks;

    using aRT.Data.Common.Repositories;
    using aRT.Data.Models;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;

    public class UsersService : IUsersService
    {
        private readonly IDeletableEntityRepository<ApplicationUser> userRepository;
        private readonly IRepository<ApplicationRole> roleRepository;
        private readonly IRepository<IdentityUserRole<string>> userRoleRepository;

        public UsersService(
            IDeletableEntityRepository<ApplicationUser> userRepository,
            IRepository<ApplicationRole> roleRepository,
            IRepository<IdentityUserRole<string>> userRoleRepository)
        {
            this.userRepository = userRepository;
            this.roleRepository = roleRepository;
            this.userRoleRepository = userRoleRepository;
        }

        public async Task AddUserInRole(string id)
        {
            var role = await this.roleRepository.All().FirstOrDefaultAsync(x => x.Name == "User");

            var userInRole = new IdentityUserRole<string>
            {
                UserId = id,
                RoleId = role.Id,
            };

            await this.userRoleRepository.AddAsync(userInRole);
            await this.userRoleRepository.SaveChangesAsync();
        }

        public async Task<bool> EmailExists(string email)
        {
            return await this.userRepository.All().AnyAsync(x => x.Email == email);
        }

        public async Task<bool> UsernameExists(string username)
        {
            return await this.userRepository.All().AnyAsync(x => x.UserName == username);
        }
    }
}
