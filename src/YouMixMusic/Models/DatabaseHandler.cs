using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using MySql.Data.MySqlClient;

namespace YouMixMusic.Models
{
    public class DatabaseHandler
    {
		MySqlConnection connection;
		private string connectionString;

		public DatabaseHandler(string connectionString)
		{
			Console.WriteLine("Opening database connection with settings {0}", connectionString);
			this.connectionString = connectionString;
			this.connection = new MySqlConnection(connectionString);
		}

		/*
		 * Connects to the database.
		 */
		public void Connect()
		{
			this.connection.Open();
		}

		/*
		 * Disconnects from the database.
		 */
		public void Disconnect()
		{
			
		}

		public void _GenerateDatabase()
		{
			MySqlCommand cmd = new MySqlCommand
			(
				@"CREATE TABLE IF NOT EXISTS `playlists` (
					user NCHAR(255) NOT NULL,
					plid int NOT NULL, yid VARCHAR(50) NOT NULL,
					idx int NOT NULL,
					PRIMARY KEY (user, plid, yid));
				CREATE TABLE IF NOT EXISTS  `playlistNames` (
					user NCHAR(255) NOT NULL,
					plid int NOT NULL,
					name NCHAR(255) NOT NULL,
					PRIMARY KEY (user, plid, name));
				CREATE TABLE IF NOT EXISTS  `users` (
					username NCHAR(255) NOT NULL,
					password NCHAR(255) NOT NULL,
					PRIMARY KEY (username));
				SHOW TABLES;"
			);
			using (MySqlDataReader reader = cmd.ExecuteReader())
			{
				Console.WriteLine("Got data {0}", reader.Read());
			}
		}

		/*
		 * Gets a playlist object from the database, populated with songs.
		 */
		public Playlist GetPlaylist(string user, int plid)
		{
			//TODO: Sanitize inputs.
			MySqlCommand cmd = new MySqlCommand(@"SELECT * FROM `playlists`
												WHERE `user` LIKE '" + user +
												"'AND `plid` = " + plid +
												" SORT `plid`");
			using (MySqlDataReader reader = cmd.ExecuteReader())
			{
				Console.WriteLine("Got data {0}", reader.Read());
			}
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
