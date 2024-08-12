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
var veiculo = /** @class */ (function () {
    function veiculo(placa, ano) {
        this._placa = placa;
        this._ano = ano;
    }
    Object.defineProperty(veiculo.prototype, "placa", {
        get: function () {
            return this._placa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(veiculo.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        enumerable: false,
        configurable: true
    });
    return veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(placa, ano, modelo) {
        var _this = _super.call(this, placa, ano) || this;
        _this._modelo = modelo;
        return _this;
    }
    Object.defineProperty(Carro.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}(veiculo));
var CarroEletrico = /** @class */ (function (_super) {
    __extends(CarroEletrico, _super);
    function CarroEletrico(placa, ano, modelo, autonomiaBateria) {
        var _this = _super.call(this, placa, ano, modelo) || this;
        _this._autonomiaBateria = autonomiaBateria;
        return _this;
    }
    Object.defineProperty(CarroEletrico.prototype, "autonomiaBateria", {
        get: function () {
            return this._autonomiaBateria;
        },
        enumerable: false,
        configurable: true
    });
    return CarroEletrico;
}(Carro));
var carro = new Carro('ABC-1234', 2022, 'Modelo A');
console.log(carro.placa);
console.log(carro.ano);
console.log(carro.modelo);
