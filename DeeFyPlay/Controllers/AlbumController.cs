using DeeFyPlay.Infra;
using DeeFyPlay.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DeeFyPlay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
        private readonly DeeFyDbContext _context;

        public AlbumController(DeeFyDbContext context)
        {
            _context = context;
        }

        // GET: api/<AlbumController>
        [HttpGet]
        public IEnumerable<Album> Get()
        {
            return _context.Albums.ToList();
        }

        // GET api/<AlbumController>/5
        [HttpGet("{id}")]
        public Album Get(int id)
        {
            return _context.Albums.Find(id);
        }

        // POST api/<AlbumController>
        [HttpPost]
        public void Post([FromBody] Album album)
        {
            album.Id = 0;
            _context.Albums.Add(album);
            _context.SaveChanges();
        }

        // PUT api/<AlbumController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Album album)
        {
            album.Id = id;
            _context.Update(album);
            _context.SaveChanges();
        }

        // DELETE api/<AlbumController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var albums = _context.Albums.Find(id);

            if (albums != null)
            {
                _context.Remove(albums);
                _context.SaveChanges();
            }
        }
    }
}
