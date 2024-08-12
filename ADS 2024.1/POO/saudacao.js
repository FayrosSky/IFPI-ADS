var Saudacao = /** @class */ (function () {
    function Saudacao(nome) {
        this.nome = nome;
    }
    Saudacao.prototype.cumprimentar = function () {
        console.log("Ol\u00E1, ".concat(this.nome, "!"));
    };
    return Saudacao;
}());
//Criando uma instância da classe Saudacao
var pessoa = new Saudacao('João');
//Chamando o método cumprimentar da instância 
pessoa.cumprimentar();
