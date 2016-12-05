using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;

namespace YouMixMusic.Controllers
{
	[Route("api/[controller]")]
	public class MotdController : Controller
	{
		// GET: api/Playlist
		[HttpGet]
		public string Get()
		{
			return "<h4><i class=\"fa fa-heartbeat\"></i> Message of the Day:</h4>User accounts and stored playlists are coming soon. Stay tuned!";
		}
	}
}
