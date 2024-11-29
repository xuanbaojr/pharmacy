namespace pharmacy.Dtos.UserInformation
{
    public class UserInfoDto
    {
        public class UpdateUserInfoDto
        {
            public string? FullName { get; set; }
            public string? PhoneNumber { get; set; }
            public string? Address { get; set; }
        }
    }
}
