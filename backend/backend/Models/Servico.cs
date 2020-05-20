using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;

namespace backend.Classes
{
    public class Servico
    {

        [Key]
        [Column("COD")]
        public int codServico { get; set; }

        public string nomeServico{ get; set; }

        public int cargaHoraria { get; set; }

        public int qtn { get; set; }

        public double valor { get; set; }


        public int ProdutoId { get; set; }
       // public virtual Produto Produto{ get; set; }

        //public int IdProduto { get; set; }
        //[ForeignKey("ID_SERVICO_PRODUTO")]
        //public virtual Produto ProdutoServico { get; set; }


    }
}
