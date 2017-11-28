using Microsoft.EntityFrameworkCore;
using Quantum.WebAPI.Data.Entities;

namespace Quantum.WebAPI.Data
{
    public class ClassContext : DbContext
    {
        public ClassContext(DbContextOptions<ClassContext> options) : base(options)
        {

        }

        public DbSet<Classes> Classes { get; set; }

        public DbSet<ClassDetail> ClassDetails { get; set; }

    }
}