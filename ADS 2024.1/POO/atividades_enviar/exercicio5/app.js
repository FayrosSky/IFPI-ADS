"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var banco_1 = require("./banco");
var prompt = require("prompt-sync");
var banco = new banco_1.Banco();
var promptSync = prompt();
var opcao;
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
            var numero = promptSync('Número da conta: ');
            var saldo = parseFloat(promptSync('Saldo: '));
            var id = parseInt(promptSync('ID do cliente: '));
            var nome = promptSync('Nome do cliente: ');
            var conta = new banco_1.Conta(numero, saldo, new banco_1.Cliente(id, nome));
            banco.inserir(conta);
            console.log('Conta inserida com sucesso!');
            break;
        case '2':
            // Consultar conta
            var numeroConsulta = promptSync('Número da conta: ');
            var contaConsultada = banco.consultar(numeroConsulta);
            console.log("N\u00FAmero: ".concat(contaConsultada.numero, ", Saldo: ").concat(contaConsultada.saldo, ", Cliente: ").concat(contaConsultada.cliente.nome));
            break;
        case '3':
            // Alterar conta
            var numeroAlteracao = promptSync('Número da conta: ');
            var novoSaldo = parseFloat(promptSync('Novo saldo: '));
            var novoId = parseInt(promptSync('Novo ID do cliente: '));
            var novoNome = promptSync('Novo nome do cliente: ');
            var contaAlterada = new banco_1.Conta(numeroAlteracao, novoSaldo, new banco_1.Cliente(novoId, novoNome));
            banco.alterar(contaAlterada);
            console.log('Conta alterada com sucesso!');
            break;
        case '4':
            // Excluir conta
            var numeroExclusao = promptSync('Número da conta: ');
            banco.excluir(numeroExclusao);
            console.log('Conta excluída com sucesso!');
            break;
        case '5':
            // Sacar
            var numeroSaque = promptSync('Número da conta: ');
            var valorSaque = parseFloat(promptSync('Valor a sacar: '));
            banco.sacar(numeroSaque, valorSaque);
            console.log('Saque realizado com sucesso!');
            break;
        case '6':
            // Depositar
            var numeroDeposito = promptSync('Número da conta: ');
            var valorDeposito = parseFloat(promptSync('Valor a depositar: '));
            banco.depositar(numeroDeposito, valorDeposito);
            console.log('Depósito realizado com sucesso!');
            break;
        case '7':
            // Transferir
            var numeroOrigem = promptSync('Número da conta de origem: ');
            var numeroDestino = promptSync('Número da conta de destino: ');
            var valorTransferencia = parseFloat(promptSync('Valor a transferir: '));
            banco.transferir(numeroOrigem, numeroDestino, valorTransferencia);
            console.log('Transferência realizada com sucesso!');
            break;
        case '8':
            // Consultar saldo
            var numeroConsultaSaldo = promptSync('Número da conta: ');
            var saldoConsultado = banco.consultarSaldo(numeroConsultaSaldo);
            console.log("Saldo da conta ".concat(numeroConsultaSaldo, ": ").concat(saldoConsultado));
            break;
        case '0':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida!');
            break;
    }
} while (opcao !== '0');
