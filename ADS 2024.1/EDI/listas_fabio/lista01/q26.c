#include <stdio.h>

int main() {
    int dias, semanas, dias_restantes;

    printf("Digite o número de dias: ");
    scanf("%d", &dias);

    semanas = dias / 7; // Para converter para semanas, basta dividir por 7
    dias_restantes = dias % 7; // O resto da divisão por 7 dará a quantidade de dias restantes

    printf("%d dias equivalem a %d semanas e %d dias.\n", dias, semanas, dias_restantes);

    return 0;
}