"use strict";
class Funcionario extends Pessoa {
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = salario;
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
}
const funcionario = new Funcionario("Joao", "Silva", "123456", 5000);
