using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace davyd_lucas.Models;

public class PagamentoComCartao : TipoDePagamento {
    public int Banco { get; set; }
    public string NomeDoBanco { get; set; }
}