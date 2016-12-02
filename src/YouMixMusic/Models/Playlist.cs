using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouMixMusic.Models
{
    public class Playlist
    {
		private string name;
		private string[] songs;

		public Playlist(string name)
		{
			this.name = name;
			this.songs = null;
		}

		public Playlist(string name, string[] songs)
		{
			this.name = name;
			this.songs = songs;
		}

		public string[] GetSongs()
		{
			return this.songs;
		}
    }
}
