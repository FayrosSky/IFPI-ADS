#include <stdio.h>

int main() {
    int metros, quilometros, metros_restantes;

    printf("Digite o valor em metros: ");
    scanf("%d", &metros);

    quilometros = metros / 1000; // Para converter para quilômetros, basta dividir por 1000
    metros_restantes = metros % 1000; // O resto da divisão por 1000 dará a quantidade de metros restantes

    printf("%d metros equivalem a %d quilômetros e %d metros.\n", metros, quilometros, metros_restantes);

    return 0;
}