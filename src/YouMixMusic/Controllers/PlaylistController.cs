using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;

namespace YouMixMusic.Controllers
{
    [Route("api/[controller]")]
    public class PlaylistController : Controller
    {
        // GET: api/Playlist
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Playlist/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Playlist
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Playlist/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Playlist/5
        public void Delete(int id)
        {
        }
    }
}
