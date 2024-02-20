using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace davyd_lucas.Models;

public class Transportadora {
    [Key]
    public int Id { get; set; }
    public string Nome { get; set; }

    public ICollection<NotaDeVenda> NotasDeVenda { get; set; }
}