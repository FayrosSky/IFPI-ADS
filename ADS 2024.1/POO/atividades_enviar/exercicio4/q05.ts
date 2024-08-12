class Cliente {
    nome: string;
    cpf: string;

    constructor(nome: string, cpf: string) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Conta {
    numero: string;
    cliente: Cliente;
    saldo: number;

    constructor(numero: string, saldo: number, cliente: Cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

// Exemplo de uso da classe Conta
let cliente1 = new Cliente("João", "123.456.789-00");

let c1: Conta = new Conta("1", 100, cliente1);
let c2: Conta = new Conta("2", 100, cliente1);
let c3: Conta = new Conta("3", 0, cliente1);

c1.sacar(10);
c1.transferir(c2, 50);

console.log(c1.consultarSaldo()); // Saída: 40
console.log(c2.consultarSaldo()); // Saída: 150
console.log(c3.consultarSaldo()); // Saída: 0

// Essas saídas ocorrem porque Isso acontece porque cada referência (c1, c2 e c3) aponta para uma instância diferente da classe Conta, e as operações realizadas em c1 não afetam as outras instâncias.