var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    return Cliente;
}());
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
// Exemplo de uso da classe Conta
var cliente1 = new Cliente("João", "123.456.789-00");
var c1 = new Conta("1", 100, cliente1);
var c2 = new Conta("2", 100, cliente1);
var c3 = new Conta("3", 0, cliente1);
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo()); // Saída: 40
console.log(c2.consultarSaldo()); // Saída: 150
console.log(c3.consultarSaldo()); // Saída: 0
