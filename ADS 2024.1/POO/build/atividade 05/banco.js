"use strict";
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }
        this.saldo -= valor;
    }
}
//# sourceMappingURL=banco.js.map