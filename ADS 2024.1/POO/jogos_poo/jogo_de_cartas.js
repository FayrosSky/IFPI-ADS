"use strict";
class Carta {
    constructor(naipe, valor) {
        this.naipe = naipe;
        this.valor = valor;
    }
}
class Baralho {
    constructor() {
        this.cartas = this.criarBaralho();
    }
    criarBaralho() {
        const naipes = ["♥", "♦", "♣", "♠"];
        const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        const cartas = [];
        for (const naipe of naipes) {
            for (const valor of valores) {
                cartas.push(new Carta(naipe, valor));
            }
        }
        return cartas;
    }
    embaralhar() {
        for (let i = this.cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
        }
    }
    distribuirCarta() {
        return this.cartas.pop();
    }
}
class Jogador {
    constructor(nome) {
        this.nome = nome;
        this.mao = [];
    }
    receberCarta(carta) {
        this.mao.push(carta);
    }
    mostrarMao() {
        console.log(`${this.nome} tem as seguintes cartas em sua mão:`);
        this.mao.forEach((carta) => {
            console.log(`- ${carta.valor} de ${carta.naipe}`);
        });
    }
}
// Exemplo de uso
consta;
baralho = new Baralho();
baralho.embaralhar();
const Jogador1 = new Jogador("Jogador 1");
const Jogador2 = new Jogador("Jogador 2");
for (let i = 0; i < 5; i++) {
    jogador1.receberCarta(baralho.distribuirCarta());
    jogador2.receberCarta(baralho.distribuirCarta());
}
jogador1.mostrarMao();
jogador2.mostrarMao();
