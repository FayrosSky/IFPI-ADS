"use strict";
class Empregado {
    constructor() {
        this.salario = 500;
    }
    calcularSalario() {
        return this.salario;
    }
}
class Diarista extends Empregado {
    calcularSalario() {
        return super.calcularSalario() / 30;
    }
}
class Horista extends Diarista {
    calcularSalario() {
        return super.calcularSalario() / 24;
    }
}
//exemplo de uso
const empregado = new Empregado();
console.log("Salário do diarista: ", empregado.calcularSalario());
const diarista = new Diarista();
console.log("Salário do Diarista: ", (diarista.calcularSalario()).toFixed(2));
const horista = new Horista();
console.log("Salário do Horista: ", (horista.calcularSalario()).toFixed(2));
//# sourceMappingURL=q01.js.map