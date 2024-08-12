var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (atacado) {
        if (atacado.estaVivo()) {
            var dano = this.calcularAtaque();
            atacado.diminuirPontos(dano);
            console.log("O jogador atacou e causou ".concat(dano, " de dano."));
        }
        else {
            console.log("O jogador atacado não está vivo.");
        }
    };
    Jogador.prototype.estaVivo = function () {
        return this.pontosAtuais > 0;
    };
    Jogador.prototype.getPontosAtuais = function () {
        return this.pontosAtuais;
    };
    Jogador.prototype.diminuirPontos = function (valor) {
        this.pontosAtuais -= valor;
    };
    Jogador.prototype.toString = function () {
        return "Jogador: For\u00E7a: ".concat(this.forca, ", N\u00EDvel: ").concat(this.nivel, ", Pontos Atuais: ").concat(this.pontosAtuais);
    };
    return Jogador;
}());
// Exemplo de uso da classe Jogador
var jogador1 = new Jogador(10, 5, 100);
var jogador2 = new Jogador(8, 3, 80);
console.log(jogador1.toString()); // Jogador: Força: 10, Nível: 5, Pontos Atuais: 100
console.log(jogador2.toString()); // Jogador: Força: 8, Nível: 3, Pontos Atuais: 80
jogador1.atacar(jogador2);
console.log(jogador2.toString()); // Jogador: Força: 8, Nível: 3, Pontos Atuais: 20
jogador2.atacar(jogador1);
console.log(jogador1.toString()); // Jogador: Força: 10, Nível: 5, Pontos Atuais: 80
if (jogador1.estaVivo() && jogador2.estaVivo()) {
    if (jogador1.getPontosAtuais() > jogador2.getPontosAtuais()) {
        console.log("O jogador 1 tem mais pontos.");
    }
    else {
        console.log("O jogador 2 tem mais pontos.");
    }
}
