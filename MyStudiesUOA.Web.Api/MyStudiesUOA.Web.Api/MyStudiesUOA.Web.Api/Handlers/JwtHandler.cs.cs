using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MyStudiesUOA.Web.Api.Handlers
{
    public class JwtHandler
    {
        private readonly IConfiguration _configuration;
        private readonly IConfigurationSection _jwtSettings;

        public JwtHandler(IConfiguration configuration)
        {
            _configuration = configuration;
            _jwtSettings = _configuration.GetSection("JwtSettings");
        }

        public SigningCredentials GetSigningCredentials()
        {
            var key = Encoding.UTF8.GetBytes(_jwtSettings.GetSection("securityKey").Value);
            var secret = new SymmetricSecurityKey(key);
            return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
        }

        /// <summary>
        /// Here we need to add users 
        /// </summary>
        /// <returns></returns>
        public List<Claim> GetClaims()
        {
            var claims = new List<Claim>
            {
                //new Claim(ClaimTypes.Email,user.Email),
                //new Claim(ClaimTypes.Name, user.UserName),
                //new Claim(ClaimTypes.Role,user.Role.ToString()),
                //new Claim(ClaimTypes.NameIdentifier , user.Id)
            };

            return claims;
        }

        /// <summary>
        /// This method generates the token that we send to the web app
        /// </summary>
        /// <param name="signingCredentials"></param>
        /// <param name="claims"></param>
        /// <returns></returns>
        public JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, List<Claim> claims)
        {

            var tokenOptions = new JwtSecurityToken(
                issuer: _jwtSettings["validIssuer"],
                audience: _jwtSettings["validAudience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(Convert.ToDouble(_jwtSettings["expiryInMinutes"])),
                signingCredentials: signingCredentials);
            return tokenOptions;
        }
    }
}
