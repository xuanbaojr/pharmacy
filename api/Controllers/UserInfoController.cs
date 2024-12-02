using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pharmacy.Data;
using pharmacy.Dtos.UserInformation;
using pharmacy.Extensions;
using pharmacy.Models;
using System;
using System.Threading.Tasks;

namespace pharmacy.Controllers
{
    [Route("api/")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private BaseResponse<object> _res;

        public UserInfoController(ApplicationDBContext context)
        {
            _context = context;
            _res = new BaseResponse<object>();
        }

        [HttpGet("RUI01")]
        [Authorize]
        public async Task<IActionResult> GetUserInfo()
        {
            if (!User.Identity.IsAuthenticated)
            {
                _res.Status = StatusCodes.Status401Unauthorized.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User is not authenticated.", string.Empty));
                return Unauthorized(_res);
            }

            try
            {
                var givenName = User.GetUsername();
                if (string.IsNullOrEmpty(givenName))
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Given name not found.", string.Empty));
                    return Unauthorized(_res);
                }

                var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == givenName);
                if (user == null)
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User not found.", string.Empty));
                    return Unauthorized(_res);
                }

                var userInfo = await _context.UserInformation.FindAsync(user.Id);

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = userInfo;
                return Ok(_res);
            }
            catch (Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        [HttpPost("UUI01")]
        [Authorize]
        public async Task<IActionResult> UpdateUserInfo([FromBody] UserInfoDto.UpdateUserInfoDto updateUserInfoDto)
        {
            if (!User.Identity.IsAuthenticated)
            {
                _res.Status = StatusCodes.Status401Unauthorized.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User is not authenticated.", string.Empty));
                return Unauthorized(_res);
            }

            try
            {
                var givenName = User.GetUsername();
                if (string.IsNullOrEmpty(givenName))
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "Given name not found.", string.Empty));
                    return Unauthorized(_res);
                }

                var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == givenName);
                if (user == null)
                {
                    _res.Status = StatusCodes.Status401Unauthorized.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User not found.", string.Empty));
                    return Unauthorized(_res);
                }

                var userInfo = await _context.UserInformation.FindAsync(user.Id);

                if (userInfo == null)
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, "User not found.", string.Empty));
                    return NotFound(_res);
                }

                userInfo.FullName = updateUserInfoDto.FullName ?? userInfo.FullName;
                userInfo.PhoneNumber = updateUserInfoDto.PhoneNumber ?? userInfo.PhoneNumber;
                userInfo.Address = updateUserInfoDto.Address ?? userInfo.Address;

                _context.UserInformation.Update(userInfo);
                await _context.SaveChangesAsync();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = userInfo;
                return Ok(_res);
            }
            catch (Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }
    }
}
