using Microsoft.EntityFrameworkCore;
using ReactUserCreatedGuides.Server.Objects;

namespace ReactUserCreatedGuides.Server.Data
{
    public class GuideContext : DbContext
    {
        public GuideContext(DbContextOptions<GuideContext> options) : base(options)
        {

        }

        public DbSet<Guide> Guides { get; set; }
    }
}
