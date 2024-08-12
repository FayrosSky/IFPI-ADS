"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.Conta = exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
exports.Conta = Conta;
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = []; // Array de contas agora é privado
    }
    Banco.prototype.inserir = function (conta) {
        this.contas.push(conta);
    };
    Banco.prototype.consultar = function (numero) {
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null; // Retorna null se a conta não for encontrada
    };
    Banco.prototype.alterar = function (conta) {
        var contaProcurada = this.consultar(conta.numero);
        if (contaProcurada) {
            contaProcurada.saldo = conta.saldo;
            contaProcurada.cliente = conta.cliente;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        if (indice !== -1) {
            this.contas.splice(indice, 1); // Remove a conta pelo índice
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta) {
            conta.sacar(valor);
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta) {
            conta.depositar(valor);
        }
    };
    Banco.prototype.transferir = function (numero, numeroContaDestino, valor) {
        var contaOrigem = this.consultar(numero);
        var contaDestino = this.consultar(numeroContaDestino);
        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    };
    Banco.prototype.consultarSaldo = function (numero) {
        var conta = this.consultar(numero);
        return conta ? conta.consultarSaldo() : null; // Retorna o saldo ou null se a conta não existir
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                return i;
            }
        }
        return -1; // Retorna -1 se a conta não for encontrada
    };
    return Banco;
}());
exports.Banco = Banco;
// Exemplo de uso
var banco = new Banco();
banco.inserir(new Conta("111-1", 100, new Cliente(1, "Ely")));
banco.inserir(new Conta("222-2", 50, new Cliente(2, "Maria")));
console.log((_a = banco.consultar("111-1")) === null || _a === void 0 ? void 0 : _a.cliente.nome);
console.log((_b = banco.consultar("222-2")) === null || _b === void 0 ? void 0 : _b.cliente.nome);
banco.inserir(new Conta("333-3", 30, new Cliente(4, "Pedro")));
banco.inserir(new Conta("444-4", 40, new Cliente(5, "Joana")));
banco.transferir("111-1", "444-4", 50);
console.log(banco.consultarSaldo("111-1"));
console.log(banco.consultarSaldo("444-4"));
