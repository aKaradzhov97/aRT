using System.Linq;

namespace aRT.Services.Data.UsersService
{
    using System;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;
    using aRT.Data.Common.Repositories;
    using aRT.Data.Models;
    using aRT.Web.Infrastructure.Jwt;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Options;
    using Microsoft.IdentityModel.Tokens;

    public class UsersService : IUsersService
    {
        private readonly IDeletableEntityRepository<ApplicationUser> userRepository;
        private readonly IRepository<ApplicationRole> roleRepository;
        private readonly IRepository<IdentityUserRole<string>> userRoleRepository;
        private readonly JwtSettings jwtSettings;

        public UsersService(
            IDeletableEntityRepository<ApplicationUser> userRepository,
            IRepository<ApplicationRole> roleRepository,
            IRepository<IdentityUserRole<string>> userRoleRepository,
            IOptions<JwtSettings> jwtSettings)
        {
            this.userRepository = userRepository;
            this.roleRepository = roleRepository;
            this.userRoleRepository = userRoleRepository;
            this.jwtSettings = jwtSettings.Value;
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

        public async Task<string> Authentication(string username, string password)
        {
            var user = await this.userRepository.All()
                .SingleOrDefaultAsync(x => x.UserName == username);
            var roleUser = await this.userRoleRepository.All()
                .SingleOrDefaultAsync(x => x.UserId == user.Id);
            var role = await this.roleRepository.All().SingleOrDefaultAsync(x => x.Id == roleUser.RoleId);

            if (user == null)
            {
                return null;
            }

            // Authentication successful - now generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(this.jwtSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.UserName.ToString()),
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Role, role.Name.ToString()),
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature),
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var userToken = tokenHandler.WriteToken(token);

            return userToken;
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