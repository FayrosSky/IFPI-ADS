var Cliente = /** @class */ (function () {
    function Cliente(id, nome) {
        this.id = id;
        this.nome = nome;
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
        if (this.saldo > valor) {
            this.saldo = this.saldo - valor;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        /*
        this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;
        */
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
function consultar(contas, numero) {
    var contaProcurada;
    for (var i = 0; i < contas.length; i++) {
        if (contas[i].numero == numero) {
            contaProcurada = contas[i];
            break;
        }
    }
    return contaProcurada;
}
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        this.contas.push(conta);
    };
    Banco.prototype.consultar = function (numero) {
        var contaProcurada;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.alterar = function (conta) {
        var contaProcurada = this.consultar(conta.numero);
        contaProcurada.saldo = conta.saldo;
        contaProcurada.cliente = conta.cliente;
    };
    Banco.prototype.alterarPorIndice = function (conta) {
        var indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indiceProcurado = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
                console.log(this.contas);
            }
            this.contas.pop();
            console.log(this.contas);
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    };
    Banco.prototype.transferir = function (numero, numeroContaDestino, valor) {
        var contaOrigem = this.consultar(numero);
        var contaDestino = this.consultar(numeroContaDestino);
        if (contaOrigem != null && contaDestino != null) {
            contaOrigem.transferir(contaDestino, valor);
        }
    };
    Banco.prototype.consultarSaldo = function (numero) {
        var conta = this.consultar(numero);
        return conta.saldo;
    };
    return Banco;
}());
var banco = new Banco();
banco.inserir(new Conta("111-1", 100, new Cliente(1, "Ely")));
banco.inserir(new Conta('222-2', 50, new Cliente(2, "Maria")));
console.log(banco.consultar("111-1").cliente.nome);
console.log(banco.consultar('222-2').cliente.nome);
banco.inserir(new Conta("333-3", 30, new Cliente(4, "Pedro")));
banco.inserir(new Conta("444-4", 40, new Cliente(5, "Joana")));
banco.transferir('111-1', '444-4', 50);
console.log(banco.consultarSaldo('111-1'));
console.log(banco.consultarSaldo('444-4'));
