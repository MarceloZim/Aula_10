using DeeFyPlay.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeeFyPlay.Infra
{
    public class DeeFyDbContext : DbContext
    {
        internal object Usuarios;
        private DbSet<Usuario> usuarios;

        public virtual DbSet<Usuario> GetUsuarios()
        {
            return usuarios;
        }

        public virtual void SetUsuarios(DbSet<Usuario> value)
        {
            usuarios = value;
        }

        public virtual DbSet<Album> Albums { get; set; }
          public virtual DbSet<Artista> Artistas { get; set; }
          public virtual DbSet<Genero> Generos { get; set; }
          public virtual DbSet<Musica> Musicas { get; set; }

          public DeeFyDbContext(DbContextOptions<DeeFyDbContext> options) : base(options)
        {

        }
          
        
    }
}
