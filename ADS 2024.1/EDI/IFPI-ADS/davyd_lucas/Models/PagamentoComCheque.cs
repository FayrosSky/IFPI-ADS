using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace davyd_lucas.Models;

public class PagamentoComCheque : TipoDePagamento {
    public string NumeroDoCartao { get; set; }
    public string Bandeira { get; set; }
}