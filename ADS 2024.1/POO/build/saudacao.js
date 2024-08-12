"use strict";
class Saudacao {
    constructor(nome) {
        this.nome = nome;
    }
    cumprimentar() {
        console.log(`Olá, ${this.nome}!`);
    }
}
//Criando uma instância da classe Saudacao
const pessoa = new Saudacao('João');
//Chamando o método cumprimentar da instância 
pessoa.cumprimentar();
//# sourceMappingURL=saudacao.js.map