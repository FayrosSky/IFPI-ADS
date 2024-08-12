"use strict";
class veiculo {
    constructor(placa, ano) {
        this._placa = placa;
        this._ano = ano;
    }
    get placa() {
        return this._placa;
    }
    get ano() {
        return this._ano;
    }
}
class Carro extends veiculo {
    constructor(placa, ano, modelo) {
        super(placa, ano);
        this._modelo = modelo;
    }
    get modelo() {
        return this._modelo;
    }
}
class CarroEletrico extends Carro {
    constructor(placa, ano, modelo, autonomiaBateria) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
    get autonomiaBateria() {
        return this._autonomiaBateria;
    }
}
const carro = new Carro('ABC-1234', 2022, 'Modelo A');
console.log(carro.placa);
console.log(carro.ano);
console.log(carro.modelo);
//super é uma palavra usada para acessar alguma coisa da superclasse, nesse caso, o construtor.
//# sourceMappingURL=q01.js.map