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
    public class MusicaController : ControllerBase
    {
        private readonly DeeFyDbContext _context;

        public MusicaController(DeeFyDbContext context)
        {
            _context = context;
        }

        // GET: api/<MusicaController>
        [HttpGet]
        public IEnumerable<Musica> Get()
        {
            return _context.Musicas.ToList();
        }

        // GET api/<UsuarioController>/5
        [HttpGet("{id}")]
        public Musica Get(int id)
        {
            return _context.Musicas.Find(id);
        }

        // POST api/<UsuarioController>
        [HttpPost]
        public void Post([FromBody] Musica musica)
        {
            musica.Id = 0;
            _context.Musicas.Add(musica);
            _context.SaveChanges();
        }

        // PUT api/<MusicaController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Usuario musica)
        {
            musica.Id = id;
            _context.Update(musica);
            _context.SaveChanges();
        }

        // DELETE api/<UsuarioController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var musica = _context.Musicas.Find(id);

            if (musica != null)
            {
                _context.Remove(musica);
                _context.SaveChanges();
            }
        }
    }
}