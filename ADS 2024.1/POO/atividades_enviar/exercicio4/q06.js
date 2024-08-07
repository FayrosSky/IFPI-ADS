var Saudacao = /** @class */ (function () {
    function Saudacao(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    Saudacao.prototype.obterSaudacao = function () {
        return "".concat(this.texto, ", ").concat(this.destinatario);
    };
    return Saudacao;
}());
// Exemplo de uso da classe Saudacao
var saudacao = new Saudacao("Bom dia", "João");
console.log(saudacao.obterSaudacao()); // Saída: "Bom dia, João"
