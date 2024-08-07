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
        if (this.saldo > valor) {
            this.saldo = this.saldo - valor;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        /*
        this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;
        */
        this.sacar(valor);
        contaDestino.depositar(valor);
        
    }
}

function consultar(contas: Conta[], numero: string): Conta {
    let contaProcurada!: Conta;
    for (let i: number = 0; i < contas.length; i++) {
        if (contas[i].numero == numero) {
            contaProcurada = contas[i];
            break;
        }
    }

    return contaProcurada;
}


export class Banco {
    contas: Conta[] = [];

    inserir(conta: Conta) {
        this.contas.push(conta);
    }

    consultar(numero: string): Conta {
        let contaProcurada!: Conta;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }

        return contaProcurada;
    }

    alterar(conta: Conta){
        let contaProcurada: Conta = this.consultar(conta.numero);
        contaProcurada.saldo = conta.saldo;
        contaProcurada.cliente = conta.cliente;        
    }

    alterarPorIndice(conta: Conta) {
        let indice: number = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }

    consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    excluir(numero: string): void {
        let indice: number = this.consultarPorIndice(numero);
        if (indice!= -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
                console.log(this.contas);
            }
            
            this.contas.pop();
            console.log(this.contas);
        }
    }    

    sacar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
        }
    }

    depositar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);
        if (conta!= null) {
            conta.depositar(valor);
        }
    }

    transferir(numero: string, numeroContaDestino: string, valor: number): void {
        let contaOrigem: Conta = this.consultar(numero);
        let contaDestino: Conta = this.consultar(numeroContaDestino);
        
        if (contaOrigem != null && contaDestino != null) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }

    consultarSaldo(numero: string): number {
        let conta: Conta = this.consultar(numero);
        return conta.saldo;
    }
}


let banco: Banco = new Banco();

banco.inserir(new Conta("111-1", 100, new Cliente(1, "Ely")));
banco.inserir(new Conta('222-2', 50, new Cliente(2, "Maria")));

console.log(banco.consultar("111-1").cliente.nome);
console.log(banco.consultar('222-2').cliente.nome);


banco.inserir(new Conta("333-3", 30, new Cliente(4, "Pedro")));
banco.inserir(new Conta("444-4", 40, new Cliente(5, "Joana")));

banco.transferir('111-1', '444-4', 50);

console.log(banco.consultarSaldo('111-1'));
console.log(banco.consultarSaldo('444-4'));