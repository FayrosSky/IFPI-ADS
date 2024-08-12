"use strict";
class Calculadora {
    //constructor que inicializa os atributos
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    soma() {
        return this.operando1 + this.operando2;
    }
}
//teste
const calculadora = new Calculadora(5, 10);
console.log(`A soma de ${calculadora['operando1']} e ${calculadora['operando2']} é: ${calculadora.soma()}`);
//# sourceMappingURL=q02.js.map