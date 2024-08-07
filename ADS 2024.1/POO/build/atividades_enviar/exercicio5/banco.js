"use strict";
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
    sacar(valor) {
        if (this.saldo > valor) {
            this.saldo = this.saldo - valor;
        }
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        /*
        this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;
        */
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
exports.Conta = Conta;
function consultar(contas, numero) {
    let contaProcurada;
    for (let i = 0; i < contas.length; i++) {
        if (contas[i].numero == numero) {
            contaProcurada = contas[i];
            break;
        }
    }
    return contaProcurada;
}
class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(conta) {
        this.contas.push(conta);
    }
    consultar(numero) {
        let contaProcurada;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    }
    alterar(conta) {
        let contaProcurada = this.consultar(conta.numero);
        contaProcurada.saldo = conta.saldo;
        contaProcurada.cliente = conta.cliente;
    }
    alterarPorIndice(conta) {
        let indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }
    consultarPorIndice(numero) {
        let indiceProcurado = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    excluir(numero) {
        let indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
                console.log(this.contas);
            }
            this.contas.pop();
            console.log(this.contas);
        }
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    transferir(numero, numeroContaDestino, valor) {
        let contaOrigem = this.consultar(numero);
        let contaDestino = this.consultar(numeroContaDestino);
        if (contaOrigem != null && contaDestino != null) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }
    consultarSaldo(numero) {
        let conta = this.consultar(numero);
        return conta.saldo;
    }
}
exports.Banco = Banco;
let banco = new Banco();
banco.inserir(new Conta("111-1", 100, new Cliente(1, "Ely")));
banco.inserir(new Conta('222-2', 50, new Cliente(2, "Maria")));
console.log(banco.consultar("111-1").cliente.nome);
console.log(banco.consultar('222-2').cliente.nome);
banco.inserir(new Conta("333-3", 30, new Cliente(4, "Pedro")));
banco.inserir(new Conta("444-4", 40, new Cliente(5, "Joana")));
banco.transferir('111-1', '444-4', 50);
console.log(banco.consultarSaldo('111-1'));
console.log(banco.consultarSaldo('444-4'));
//# sourceMappingURL=banco.js.map