using System.Collections.Generic;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using NutriDiary.Identity.Quickstart;

namespace NutriDiary.Identity
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> IdentityResourceList =>
            new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile()
            };
        
        public static IEnumerable<ApiScope> ApiScopes =>
            new List<ApiScope>
            {
                new("api1", "NutriWeb")
            };

        public static List<TestUser> Users =>
            new List<TestUser>
            {
                new()
                {
                    SubjectId = 1.ToString(),
                    Username = "demo",
                    Password = "password"
                },
                new()
                {
                    SubjectId = 2.ToString(),
                    Username = "admin",
                    Password = "p@ssword$"
                }
            };
        
        public static IEnumerable<Client> Clients =>
            new List<Client>
            {
                new()
                {
                    ClientId = "client",

                    // no interactive user, use the clientid/secret for authentication
                    AllowedGrantTypes = GrantTypes.ClientCredentials,

                    // secret for authentication
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },

                    // scopes that client has access to
                    AllowedScopes = {"api1"}
                },
                new()
                {
                    ClientId = "angular_spa",
                    ClientName = "Angular 4 Client",
                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = true,
                    RequireClientSecret = false,
                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "api1"
                    },
                    RedirectUris = new List<string> {"https://localhost:5001/auth-callback"},
                    PostLogoutRedirectUris = new List<string> {"https://localhost:5001/"},
                    AllowedCorsOrigins = new List<string> {"https://localhost:5001"},
                    AllowAccessTokensViaBrowser = true
                }
            };
    }
}