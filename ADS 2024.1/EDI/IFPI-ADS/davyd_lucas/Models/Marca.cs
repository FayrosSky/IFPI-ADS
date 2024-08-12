using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace davyd_lucas.Models;

public class Marca {
    [Key]
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Descricao { get; set; }

    public ICollection<Produto> Produtos { get; set; }
}