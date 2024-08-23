"use strict";
class CalculadoraCientifica extends Calculadora {
    //construtor que chama o construtor da classe pai
    constructor(operando1, operando2) {
        super(operando1, operando2);
    }
    //método que retorna o primeiro operando elevado ao segundo
    exponenciar() {
        return Math.pow(this['operando1'], this['operando2']);
    }
}
const calcCientifica = new CalculadoraCientifica(2, 3);
console.log(`A soma de ${calcCientifica.soma()} é: ${calcCientifica.soma()}`);
console.log(`2 elevado a 3 é: ${calcCientifica.exponenciar()}`);
//# sourceMappingURL=q03.js.map