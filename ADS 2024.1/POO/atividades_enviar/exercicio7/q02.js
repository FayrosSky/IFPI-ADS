var Calculadora = /** @class */ (function () {
    //constructor que inicializa os atributos
    function Calculadora(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    Calculadora.prototype.soma = function () {
        return this.operando1 + this.operando2;
    };
    return Calculadora;
}());
//teste
var calculadora = new Calculadora(5, 10);
console.log("A soma de ".concat(calculadora['operando1'], " e ").concat(calculadora['operando2'], " \u00E9: ").concat(calculadora.soma()));
