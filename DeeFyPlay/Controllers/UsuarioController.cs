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
    public class UsuarioController : ControllerBase
    {
        private readonly DeeFyDbContext _context;

        public UsuarioController(DeeFyDbContext context)
        {
            _context = context;
        }

        // GET: api/<UsuarioController>
        [HttpGet]
        public IEnumerable<Usuario> Get()
        {
            return _context.GetUsuario().ToList();
        }

        // GET api/<UsuarioController>/5
        [HttpGet("{id}")]
        public Usuario Get(int id)
        {
            return _context.GetUsuario().Find(id);
        }

        // POST api/<UsuarioController>
        [HttpPost]
        public void Post([FromBody] Usuario usuario)
        {
            usuario.Id = 0;
            _context.GetUsuario().Add(usuario);
            _context.SaveChanges();
        }

        // PUT api/<UsuarioController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Usuario usuario)
        {
            usuario.Id = id;
            _context.Update(usuario);
            _context.SaveChanges();
        }

        // DELETE api/<UsuarioController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var usuario = _context.GetUsuarios().Find(id);

            if (usuario != null)
            {
                _context.Remove(usuario);
                _context.SaveChanges();
            }
        }
    }
}
