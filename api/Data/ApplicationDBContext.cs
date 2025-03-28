using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using pharmacy.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace pharmacy.Data
{
    public class ApplicationDBContext : IdentityDbContext<AppUser>
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
        : base(dbContextOptions)
        {

        }

        public DbSet<Comment> Comments { get; set; }
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Wishlist> Wishlist { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<SearchHistory> SearchHistories { get; set; }
        public DbSet<UserInformation> UserInformation { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole
                {
                    Name = "User",
                    NormalizedName = "USER"
                },
                new IdentityRole
                {
                    Name = "Shipper",
                    NormalizedName = "SHIPPER"
                },
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
    }
}