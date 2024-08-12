import { Cliente, Conta, Banco } from './banco';
import * as prompt from 'prompt-sync';

let banco: Banco = new Banco();

const promptSync = prompt();

let opcao: string;

do {
    console.log('Escolha uma opção:');
    console.log('1. Inserir conta');
    console.log('2. Consultar conta');
    console.log('3. Alterar conta');
    console.log('4. Excluir conta');
    console.log('5. Sacar');
    console.log('6. Depositar');
    console.log('7. Transferir');
    console.log('8. Consultar saldo');
    console.log('0. Sair');

    opcao = promptSync('Opção: ');

    switch (opcao) {
        case '1':
            // Inserir conta
            const numero: string = promptSync('Número da conta: ');
            const saldo: number = parseFloat(promptSync('Saldo: '));
            const id: number = parseInt(promptSync('ID do cliente: '));
            const nome: string = promptSync('Nome do cliente: ');
            const conta: Conta = new Conta(numero, saldo, new Cliente(id, nome));
            banco.inserir(conta);
            console.log('Conta inserida com sucesso!');
            break;
        case '2':
            // Consultar conta
            const numeroConsulta: string = promptSync('Número da conta: ');
            const contaConsultada: Conta = banco.consultar(numeroConsulta);
            console.log(`Número: ${contaConsultada.numero}, Saldo: ${contaConsultada.saldo}, Cliente: ${contaConsultada.cliente.nome}`);
            break;
        case '3':
            // Alterar conta
            const numeroAlteracao: string = promptSync('Número da conta: ');
            const novoSaldo: number = parseFloat(promptSync('Novo saldo: '));
            const novoId: number = parseInt(promptSync('Novo ID do cliente: '));
            const novoNome: string = promptSync('Novo nome do cliente: ');
            const contaAlterada: Conta = new Conta(numeroAlteracao, novoSaldo, new Cliente(novoId, novoNome));
            banco.alterar(contaAlterada);
            console.log('Conta alterada com sucesso!');
            break;
        case '4':
            // Excluir conta
            const numeroExclusao: string = promptSync('Número da conta: ');
            banco.excluir(numeroExclusao);
            console.log('Conta excluída com sucesso!');
            break;
        case '5':
            // Sacar
            const numeroSaque: string = promptSync('Número da conta: ');
            const valorSaque: number = parseFloat(promptSync('Valor a sacar: '));
            banco.sacar(numeroSaque, valorSaque);
            console.log('Saque realizado com sucesso!');
            break;
        case '6':
            // Depositar
            const numeroDeposito: string = promptSync('Número da conta: ');
            const valorDeposito: number = parseFloat(promptSync('Valor a depositar: '));
            banco.depositar(numeroDeposito, valorDeposito);
            console.log('Depósito realizado com sucesso!');
            break;
        case '7':
            // Transferir
            const numeroOrigem: string = promptSync('Número da conta de origem: ');
            const numeroDestino: string = promptSync('Número da conta de destino: ');
            const valorTransferencia: number = parseFloat(promptSync('Valor a transferir: '));
            banco.transferir(numeroOrigem, numeroDestino, valorTransferencia);
            console.log('Transferência realizada com sucesso!');
            break;
        case '8':
            // Consultar saldo
            const numeroConsultaSaldo: string = promptSync('Número da conta: ');
            const saldoConsultado: number = banco.consultarSaldo(numeroConsultaSaldo);
            console.log(`Saldo da conta ${numeroConsultaSaldo}: ${saldoConsultado}`);
            break;
        case '0':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida!');
            break;
    }
} while (opcao !== '0');