"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sobrenome", {
        get: function () {
            return this._sobrenome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "nomeCompleto", {
        get: function () {
            return "".concat(this._nome, " ").concat(this._sobrenome);
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var pessoa = new Pessoa("João", "Silva");
console.log("Nome: ", pessoa.nome);
console.log("Sobrenome: ", pessoa.sobrenome);
console.log("Nome completo: ", pessoa.nomeCompleto);
