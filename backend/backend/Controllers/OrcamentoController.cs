using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrcamentoController : ControllerBase
    {


        public IEnumerable<Produto> ListProd()
        {

            List<Produto> p = new List<Produto>();
            return p;
        }




        public List<Produto> CriaProdutos()
        {
            List<Produto> list = new List<Produto>();

            Produto p1 = new Produto { };

            





            return list;
        }

    }
}