#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "conta.h"
#include "funcoes.c"

Conta conta;

int main(int argc, char *argv[])
{
    char nome[50];
    float renda;
    char CPF[12];
    char endereco[100];
    char chavePIX[20];
    float valor;

    printf("Digite o nome do titular: ");
    scanf("%s", nome);
    printf("Digite a renda do titular: ");
    scanf("%f", &renda);
    printf("Digite o CPF do titular: ");
    scanf("%s", CPF);
    printf("Digite o endereço do titular: ");
    scanf("%s", endereco);
    printf("Digite a chave PIX do titular: ");
    scanf("%s", chavePIX);

    Titular titular = CriarTitular(nome, renda, CPF, endereco, chavePIX);
    CriarConta(&conta, titular);

    int opcao;

    do
    {
        printf("\n======= MENU ======= \n");
        printf("1 - Abrir conta\n");
        printf("2 - Depositar\n");
        printf("3 - Sacar\n");
        printf("4 - Realizar PIX\n");
        printf("5 - Consultar Saldo\n");
        printf("6 - Consultar chave PIX\n");
        printf("7 - Gerar Extrato\n");
        printf("0 - Sair\n");
        printf("Escolha uma opção: ");
        scanf("%d", &opcao);

        if (opcao == 1)
        {
            printf("Nenhuma conta aberta.\n");

        } else if (opcao == 2)
        {
            printf("Digite o valor do depósito: ");
            scanf("%f", &valor);
            Depositar(&conta, valor);

        } else if (opcao == 3)
        {
            printf("Digite o valor do saque: ");
            scanf("%f", &valor);
            Sacar(&conta, valor);

        } else if (opcao == 4)
        {
            printf("Digite o valor do PIX: ");
            scanf("%f", &valor);
            printf("Digite a chave PIX: ");
            scanf("%s", chavePIX);
            RealizarPIX(&conta, valor, chavePIX);

        } else if (opcao == 5)
        {
            ConsultarSaldo(&conta);

        } else if (opcao == 6)
        {
            ConsultarChavePIX(&conta);

        } else if (opcao == 7)
        {
            GerarExtrato(&conta);

        }
    } while (opcao != 0);

    return 0;
}