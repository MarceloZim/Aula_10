using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeeFyPlay.Model
{
    public class Album
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public DateTime DataLnacamento { get; set; }
        public DateTime DataInclusao { get; set; }

    }
}
