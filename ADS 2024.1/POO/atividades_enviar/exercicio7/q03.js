var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    //construtor que chama o construtor da classe pai
    function CalculadoraCientifica(operando1, operando2) {
        return _super.call(this, operando1, operando2) || this;
    }
    //método que retorna o primeiro operando elevado ao segundo
    CalculadoraCientifica.prototype.exponenciar = function () {
        return Math.pow(this['operando1'], this['operando2']);
    };
    return CalculadoraCientifica;
}(Calculadora));
var calcCientifica = new CalculadoraCientifica(2, 3);
console.log("A soma de ".concat(calcCientifica.soma(), " \u00E9: ").concat(calcCientifica.soma()));
console.log("2 elevado a 3 \u00E9: ".concat(calcCientifica.exponenciar()));
