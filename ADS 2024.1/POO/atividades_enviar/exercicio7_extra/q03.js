"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var q02_1 = require("./q02");
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sobrenome, matricula, salario) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this._matricula = matricula;
        _this._salario = Math.max(0, salario); //garante que o salário não será negativo
        return _this;
    }
    Object.defineProperty(Funcionario.prototype, "matricula", {
        get: function () {
            return this._matricula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.calcularSalarioPrimeiraParcela = function () {
        return this._salario * 0.6; // 60% do salário
    };
    Funcionario.prototype.calcularSalarioSegundoParcela = function () {
        return this._salario * 0.4; // 40% do salário
    };
    return Funcionario;
}(q02_1.Pessoa));
var funcionario = new Funcionario("Joao", "Silva", "123456", 5000);
console.log("Sal\u00E1rio total: ".concat(funcionario.salario));
console.log("Primeira Parcela: ".concat(funcionario.calcularSalarioPrimeiraParcela()));
console.log("Segunda parcela: ".concat(funcionario.calcularSalarioSegundoParcela()));
