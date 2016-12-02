using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace YouMixMusic.Models
{
    public class DatabaseContext : DbContext
    {
		public DbSet<Playlist> playlists { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlite(CONFIG_FILE_HERE);
		}
    }
}
