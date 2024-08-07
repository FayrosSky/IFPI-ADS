"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const banco_1 = require("./banco");
const prompt = __importStar(require("prompt-sync"));
let banco = new banco_1.Banco();
const promptSync = prompt();
let opcao;
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
            const numero = promptSync('Número da conta: ');
            const saldo = parseFloat(promptSync('Saldo: '));
            const id = parseInt(promptSync('ID do cliente: '));
            const nome = promptSync('Nome do cliente: ');
            const conta = new banco_1.Conta(numero, saldo, new banco_1.Cliente(id, nome));
            banco.inserir(conta);
            console.log('Conta inserida com sucesso!');
            break;
        case '2':
            // Consultar conta
            const numeroConsulta = promptSync('Número da conta: ');
            const contaConsultada = banco.consultar(numeroConsulta);
            console.log(`Número: ${contaConsultada.numero}, Saldo: ${contaConsultada.saldo}, Cliente: ${contaConsultada.cliente.nome}`);
            break;
        case '3':
            // Alterar conta
            const numeroAlteracao = promptSync('Número da conta: ');
            const novoSaldo = parseFloat(promptSync('Novo saldo: '));
            const novoId = parseInt(promptSync('Novo ID do cliente: '));
            const novoNome = promptSync('Novo nome do cliente: ');
            const contaAlterada = new banco_1.Conta(numeroAlteracao, novoSaldo, new banco_1.Cliente(novoId, novoNome));
            banco.alterar(contaAlterada);
            console.log('Conta alterada com sucesso!');
            break;
        case '4':
            // Excluir conta
            const numeroExclusao = promptSync('Número da conta: ');
            banco.excluir(numeroExclusao);
            console.log('Conta excluída com sucesso!');
            break;
        case '5':
            // Sacar
            const numeroSaque = promptSync('Número da conta: ');
            const valorSaque = parseFloat(promptSync('Valor a sacar: '));
            banco.sacar(numeroSaque, valorSaque);
            console.log('Saque realizado com sucesso!');
            break;
        case '6':
            // Depositar
            const numeroDeposito = promptSync('Número da conta: ');
            const valorDeposito = parseFloat(promptSync('Valor a depositar: '));
            banco.depositar(numeroDeposito, valorDeposito);
            console.log('Depósito realizado com sucesso!');
            break;
        case '7':
            // Transferir
            const numeroOrigem = promptSync('Número da conta de origem: ');
            const numeroDestino = promptSync('Número da conta de destino: ');
            const valorTransferencia = parseFloat(promptSync('Valor a transferir: '));
            banco.transferir(numeroOrigem, numeroDestino, valorTransferencia);
            console.log('Transferência realizada com sucesso!');
            break;
        case '8':
            // Consultar saldo
            const numeroConsultaSaldo = promptSync('Número da conta: ');
            const saldoConsultado = banco.consultarSaldo(numeroConsultaSaldo);
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
//# sourceMappingURL=app.js.map