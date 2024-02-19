using System.ComponentModel.DataAnnotations;

namespace davyd_lucas.Models;

public class Cliente {
    [Key]
    public int Id { get; set; }
    public int Nome { get; set; }

    public ICollection<NotaDeVenda> NotasDeVenda { get; set; }
}