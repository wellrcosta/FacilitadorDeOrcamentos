using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;

namespace backend.Classes
{
    public class Produto
    {


        [Key]
        [Column("ID")]
        public int id { get; set; }

        public string grupo { get; set; }

        public string item { get; set; }

        public string transcricao { get; set; }

        public double valor { get; set; }


        public virtual ICollection<Servico> servicos { get; set; }

        //public virtual ICollection<Servico> servicos { get; set; }
    }
}
