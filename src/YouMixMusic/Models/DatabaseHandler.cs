using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouMixMusic.Models
{
    public class DatabaseHandler
    {
		private string connectionString;

		public DatabaseHandler(string connectionString)
		{
			this.connectionString = connectionString;
		}

		/*
		 * Connects to the database.
		 */
		private bool Connect()
		{
			return false;
		}

		/*
		 * Disconnects from the database.
		 */
		private void Disconnect()
		{
			
		}

		/*
		 * Gets a playlist object from the database, populated with songs.
		 */
		public Playlist GetPlaylist(string user, Playlist playlist)
		{
			return null;
		}

		/*
		 * Checks whether a playlist of the given name exists.
		 */
		public bool IsPlaylist(string user, string playlistName)
		{
			return false;
		}

		/*
		 * Updates a playlist in the database, or creates the playlist if it does not yet exist.
		 */
		public bool UpdatePlaylist(Playlist playlist)
		{
			return false;
		}

		/*
		 * Removes a playlist from the database.
		 */
		public bool RemovePlaylist(Playlist playlist)
		{
			return false;
		}
    }
}
