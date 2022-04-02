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

        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<Album> Albums { get; set; }
        public virtual DbSet<Artista> Artistas { get; set; }
        public virtual DbSet<Genero> Generos { get; set; }
        public virtual DbSet<Musica> Musicas { get; set; }

        public DeeFyDbContext(DbContextOptions<DeeFyDbContext> options) : base(options)
        {

        }


    }
}
