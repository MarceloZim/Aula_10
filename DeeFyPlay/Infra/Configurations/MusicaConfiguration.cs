using DeeFyPlay.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeeFyPlay.Infra.Configurations
{
    public class MusicaConfiguration : IEntityTypeConfiguration<Musica>
    {
        public void Configure(EntityTypeBuilder<Musica> builder)
        {
            builder.HasKey(e => e.Id);
            builder.Property(e => e.Id).UseIdentityColumn();
            builder.Property(e => e.ArtistaId).UseIdentityColumn();
            builder.Property(e => e.GeneroId).UseIdentityColumn();
            builder.Property(e => e.NomeMusica).IsRequired().HasMaxLength(100);
            builder.Property(e => e.ArquivoMusica).IsRequired().HasMaxLength(100);
            builder.Property(e => e.DataInclusao).HasColumnType("datetime")
                .HasDefaultValueSql("GETDATE()").ValueGeneratedOnAdd();
        }
    }
}
