using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using pharmacy.Models;

namespace pharmacy.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}