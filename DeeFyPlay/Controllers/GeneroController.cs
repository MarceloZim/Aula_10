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
    public class GeneroController : ControllerBase
    {
        private readonly DeeFyDbContext _context;

        public GeneroController(DeeFyDbContext context)
        {
            _context = context;
        }

        // GET: api/<GeneroController>
        [HttpGet]
        public IEnumerable<Genero> Get()
        {
            return _context.Generos.ToList();
        }

        // GET api/<GeneroController>/5
        [HttpGet("{id}")]
        public Genero Get(int id)
        {
            return _context.Generos.Find(id);
        }

        // POST api/<GeneroController>
        [HttpPost]
        public void Post([FromBody] Genero genero)
        {
            genero.Id = 0;
            _context.Generos.Add(genero);
            _context.SaveChanges();
        }

        // PUT api/<GeneroController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Genero genero)
        {
            genero.Id = id;
            _context.Update(genero);
            _context.SaveChanges();
        }

        // DELETE api/<GeneroController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var genero = _context.Generos.Find(id);

            if (genero != null)
            {
                _context.Remove(genero);
                _context.SaveChanges();
            }
        }
    }
}
