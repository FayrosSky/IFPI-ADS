"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q02_1 = require("./q02");
class Funcionario extends q02_1.Pessoa {
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = Math.max(0, salario); //garante que o salário não será negativo
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    calcularSalarioPrimeiraParcela() {
        return this._salario * 0.6; // 60% do salário
    }
    calcularSalarioSegundoParcela() {
        return this._salario * 0.4; // 40% do salário
    }
}
const funcionario = new Funcionario("Joao", "Silva", "123456", 5000);
console.log(`Salário total: ${funcionario.salario}`);
console.log(`Primeira Parcela: ${funcionario.calcularSalarioPrimeiraParcela()}`);
console.log(`Segunda parcela: ${funcionario.calcularSalarioSegundoParcela()}`);
//# sourceMappingURL=q03.js.map