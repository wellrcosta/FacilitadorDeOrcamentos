using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using backend.Classes;

namespace backend.Models
{
    public class OrcamentoContext : DbContext
    {
        public OrcamentoContext(DbContextOptions<OrcamentoContext> options) 
            :base (options)
        {

        }

        public DbSet<Produto> Produto { get; set; }
        public DbSet<Servico> Servico { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Password=;Persist Security Info=True;User ID=sa;Initial Catalog=AppModulos;Data Source=DESKTOP-P4ASGFR\\LANTEK");
        }

    }
}
