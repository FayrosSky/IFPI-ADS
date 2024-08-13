"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    get nome() {
        return this._nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    get nomeCompleto() {
        return `${this._nome} ${this._sobrenome}`;
    }
}
exports.Pessoa = Pessoa;
const pessoa = new Pessoa("João", "Silva");
console.log("Nome: ", pessoa.nome);
console.log("Sobrenome: ", pessoa.sobrenome);
console.log("Nome completo: ", pessoa.nomeCompleto);
