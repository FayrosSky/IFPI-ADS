var Banco = /** @class */ (function () {
    function Banco() {
        this.constas = [];
    }
    Banco.prototype.inserir = function (conta) {
        this.constas.push(conta);
    };
    Banco.prototype.consultar = function (numero) {
        var contaProcurada;
        for (var i = 0; i < contas.length; i++) {
            if (this.constas[i].numero == numero) {
                contaProcurada = this.conta[i];
                break;
            }
        }
    };
    return Banco;
}());
return contaProcurada;
