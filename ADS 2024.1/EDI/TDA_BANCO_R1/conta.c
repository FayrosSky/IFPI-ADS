#include "conta.h"

void CriarConta(Conta *conta, Titular titular)
{
    static int contadorContas = 1;
    snprintf(conta->numero, sizeof(conta->numero), "C%04d", contadorContas++);
    conta->saldo = 0;
    *conta = (Conta) { .titular = titular };
}

void Depositar(Conta *conta, float valor)
{
    conta->saldo += valor;
}

void Sacar(Conta *conta, float valor)
{
    if (conta->saldo >= valor)
        conta->saldo -= valor;
    else
        printf("Saldo insuficiente\n");
}

void RealizarPIX(Conta *conta, float valor, char chavePIX[])
{
    if (conta->saldo >= valor) {
        conta->saldo -= valor;
        printf("PIX realizado com sucesso\n");
    } else {
        printf("Saldo insuficiente\n");
    }
}

void ConsultarSaldo(Conta *conta)
{
    printf("Saldo: %.2f\n", conta->saldo);
}

void ConsultarChavePIX(Conta *conta)
{
    printf("Chave PIX: %s\n", conta->titular.chavePIX);
}

void GerarExtrato(Conta *conta)
{
    printf("Extrato da conta %s:\n", conta->numero);
    printf("Titular: %s\n", conta->titular.nome);
    printf("Saldo: %.2f\n", conta->saldo);
}