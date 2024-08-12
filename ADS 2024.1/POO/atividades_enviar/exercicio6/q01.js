"use strict";
class Calculadora {
    constructor(operando_1, operando_2) {
        this.operando_1 = operando_1;
        this.operando_2 = operando_2;
    }
    soma(a, b) {
        return a + b;
    }
    subtracao(a, b) {
        if (a > b) {
            return a - b;
        }
        else {
            return b - a;
        }
    }
    calcular() {
        const resultado_soma = this.soma(this.operando_1, this.operando_2);
        const resultado_subtracao = this.subtracao(this.operando_1, this.operando_2);
        console.log(`O resultado de ${this.operando_1} + ${this.operando_2} é igual a: ${resultado_soma} `);
        console.log(`O resultado de ${this.operando_1} - ${this.operando_2} é igual a: ${resultado_subtracao}; `);
    }
}
const calculadora = new Calculadora(5, 3);
calculadora.calcular();
