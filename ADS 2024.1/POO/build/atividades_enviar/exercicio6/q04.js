"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.Conta = exports.Cliente = void 0;
class Cliente {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}
exports.Cliente = Cliente;
class Conta {
    constructor(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    // Métodos "get" para leitura
    getNumero() {
        return this.numero;
    }
    getCliente() {
        return this.cliente;
    }
    getSaldo() {
        return this.saldo;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
    depositar(valor) {
        this.saldo += valor;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
exports.Conta = Conta;
class Banco {
    constructor() {
        this.contas = []; // Array de contas agora é privado
    }
    inserir(conta) {
        this.contas.push(conta);
    }
    consultar(numero) {
        for (let conta of this.contas) {
            if (conta.getNumero() === numero) { // Usando o método getNumero
                return conta;
            }
        }
        return null; // Retorna null se a conta não for encontrada
    }
    alterar(conta) {
        const contaProcurada = this.consultar(conta.getNumero());
        if (contaProcurada) {
            contaProcurada.sacar(conta.getSaldo());
        }
    }
    excluir(numero) {
        const indice = this.consultarPorIndice(numero);
        if (indice !== -1) {
            this.contas.splice(indice, 1);
        }
    }
    sacar(numero, valor) {
        const conta = this.consultar(numero);
        if (conta) {
            conta.sacar(valor);
        }
    }
    depositar(numero, valor) {
        const conta = this.consultar(numero);
        if (conta) {
            conta.depositar(valor);
        }
    }
    transferir(numero, numeroContaDestino, valor) {
        const contaOrigem = this.consultar(numero);
        const contaDestino = this.consultar(numeroContaDestino);
        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }
    consultarSaldo(numero) {
        const conta = this.consultar(numero);
        return conta ? conta.getSaldo() : null;
    }
    consultarPorIndice(numero) {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero() === numero) { // Usando o método getNumero
                return i;
            }
        }
        return -1; // Retorna -1 se a conta não for encontrada
    }
}
exports.Banco = Banco;
// Exemplo de uso
let banco = new Banco();
banco.inserir(new Conta("111-1", 100, new Cliente(1, "Ely")));
banco.inserir(new Conta("222-2", 50, new Cliente(2, "Maria")));
console.log((_a = banco.consultar("111-1")) === null || _a === void 0 ? void 0 : _a.getCliente().nome);
console.log((_b = banco.consultar("222-2")) === null || _b === void 0 ? void 0 : _b.getCliente().nome);
banco.inserir(new Conta("333-3", 30, new Cliente(4, "Pedro")));
banco.inserir(new Conta("444-4", 40, new Cliente(5, "Joana")));
banco.transferir("111-1", "444-4", 50);
console.log(banco.consultarSaldo("111-1"));
console.log(banco.consultarSaldo("444-4"));
//# sourceMappingURL=q04.js.map