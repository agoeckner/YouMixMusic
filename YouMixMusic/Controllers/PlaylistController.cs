using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace YouMixMusic.Controllers
{
    public class PlaylistController : ApiController
    {
		/*[HttpPost]
		[ActionName("playlist-add")]
		public void addToPlaylist([FromBody]Playlist list, [FromBody]string yid)
		{
			Console.WriteLine("Added video with YID {0}.");
		}*/

		[HttpPost]
		[ActionName("playlist-create")]
		public void createPlaylist([FromBody]string name) //MAKE THIS RETURN A PLAYLIST OBJECT AT SOME POINT
		{
			Console.WriteLine("Created a new playlist with name {0}.");
		}
	}
}
