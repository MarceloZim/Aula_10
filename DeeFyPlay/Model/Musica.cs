using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeeFyPlay.Model
{
    public class Musica
    {
        public int Id { get; set; }
        public string NomeMusica { get; set; }
        public string ArquivoMusica { get; set; }
        public int ArtistaId { get; set; }
        public int GeneroId {get; set;}
        public DateTime DataInclusao { get; set; }
    }
}
