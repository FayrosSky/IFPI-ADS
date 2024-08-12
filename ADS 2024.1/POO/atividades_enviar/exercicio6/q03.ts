export class Cliente {
    id: number;
    nome: string;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }
}

export class Conta {
    numero: string;
    cliente: Cliente;
    saldo: number;

    constructor(numero: string, saldo: number, cliente: Cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number) {
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

export class Banco {
    private contas: Conta[] = []; // Array de contas agora é privado

    public inserir(conta: Conta): void {
        this.contas.push(conta);
    }

    public consultar(numero: string): Conta | null {
        for (let conta of this.contas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null; // Retorna null se a conta não for encontrada
    }

    public alterar(conta: Conta): void {
        const contaProcurada = this.consultar(conta.numero);
        if (contaProcurada) {
            contaProcurada.saldo = conta.saldo;
            contaProcurada.cliente = conta.cliente;
        }
    }

    public excluir(numero: string): void {
        const indice = this.consultarPorIndice(numero);
        if (indice !== -1) {
            this.contas.splice(indice, 1); // Remove a conta pelo índice
        }
    }

    public sacar(numero: string, valor: number): void {
        const conta = this.consultar(numero);
        if (conta) {
            conta.sacar(valor);
        }
    }

    public depositar(numero: string, valor: number): void {
        const conta = this.consultar(numero);
        if (conta) {
            conta.depositar(valor);
        }
    }

    public transferir(numero: string, numeroContaDestino: string, valor: number): void {
        const contaOrigem = this.consultar(numero);
        const contaDestino = this.consultar(numeroContaDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }

    public consultarSaldo(numero: string): number | null {
        const conta = this.consultar(numero);
        return conta ? conta.consultarSaldo() : null; // Retorna o saldo ou null se a conta não existir
    }

    private consultarPorIndice(numero: string): number {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                return i;
            }
        }
        return -1; // Retorna -1 se a conta não for encontrada
    }
}

// Exemplo de uso
let banco: Banco = new Banco();
banco.inserir(new Conta("111-1", 100, new Cliente(1, "Ely")));
banco.inserir(new Conta("222-2", 50, new Cliente(2, "Maria")));

console.log(banco.consultar("111-1")?.cliente.nome);
console.log(banco.consultar("222-2")?.cliente.nome);

banco.inserir(new Conta("333-3", 30, new Cliente(4, "Pedro")));
banco.inserir(new Conta("444-4", 40, new Cliente(5, "Joana")));

banco.transferir("111-1", "444-4", 50);

console.log(banco.consultarSaldo("111-1"));
console.log(banco.consultarSaldo("444-4"));