"use strict";
class Jogador {
    constructor(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    calcularAtaque() {
        return this.forca * this.nivel;
    }
    atacar(atacado) {
        if (atacado.estaVivo()) {
            const dano = this.calcularAtaque();
            atacado.diminuirPontos(dano);
            console.log(`O jogador atacou e causou ${dano} de dano.`);
        }
        else {
            console.log("O jogador atacado não está vivo.");
        }
    }
    estaVivo() {
        return this.pontosAtuais > 0;
    }
    getPontosAtuais() {
        return this.pontosAtuais;
    }
    diminuirPontos(valor) {
        this.pontosAtuais -= valor;
    }
    toString() {
        return `Jogador: Força: ${this.forca}, Nível: ${this.nivel}, Pontos Atuais: ${this.pontosAtuais}`;
    }
}
// Exemplo de uso da classe Jogador
let jogador1 = new Jogador(10, 5, 100);
let jogador2 = new Jogador(8, 3, 80);
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
//# sourceMappingURL=q10.js.map