#include <stdio.h>

int main() {
    float custoFabrica, custoDistribuidor, impostos, custoFinal;

    printf("Digite o custo de fábrica do carro: ");
    scanf("%f", &custoFabrica);

    impostos = custoFabrica * 0.45;
    custoFabrica += impostos;
    
    custoDistribuidor = custoFabrica * 0.28;
    custoFinal = custoFabrica + custoDistribuidor;

    printf("O custo ao consumidor final é de R$ %.2f.\n", custoFinal);

    return 0;
}