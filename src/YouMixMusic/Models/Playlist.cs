using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouMixMusic.Models
{
    public class Playlist
    {
		public string name;
		public int plid;
		private string[] songs;

		public Playlist(string name)
		{
			this.name = name;
			this.plid = new Random().Next(0, 999999); //TODO: This is terrible.
			this.songs = null;
		}

		public Playlist(string name, int id)
		{
			this.name = name;
			this.plid = id;
			this.songs = null;
		}

		public Playlist(string name, int id, string[] songs)
		{
			this.name = name;
			this.plid = id;
			this.songs = songs;
		}

		public string[] GetSongs()
		{
			return this.songs;
		}
    }
}
