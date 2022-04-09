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
    public class ArtistaController : ControllerBase
    {
        private readonly DeeFyDbContext _context;

        public ArtistaController(DeeFyDbContext context)
        {
            _context = context;
        }

        // GET: api/<artistaController>
        [HttpGet]
        public IEnumerable<Artista> Get()
        {
            return _context.Artistas.ToList();
        }

        // GET api/<artistaController>/5
        [HttpGet("{id}")]
        public Artista Get(int id)
        {
            return _context.Artistas.Find(id);
        }

        // POST api/<artistaController>
        [HttpPost]
        public void Post([FromBody] Artista artista)
        {
            artista.Id = 0;
            _context.Artistas.Add(artista);
            _context.SaveChanges();
        }

        // PUT api/<artistaController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Artista artista)
        {
            artista.Id = id;
            _context.Update(artista);
            _context.SaveChanges();
        }

        // DELETE api/<artistaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var artista = _context.Artistas.Find(id);

            if (artista != null)
            {
                _context.Remove(artista);
                _context.SaveChanges();
            }
        }
    }
}
