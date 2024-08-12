#include <stdio.h>

int main() {
    int horas, semanas, dias, horas_restantes;

    printf("Digite o número de horas: ");
    scanf("%d", &horas);

    semanas = horas / 168; // Para converter para semanas, basta dividir por 168 (pois uma semana tem 7 dias, ou seja, 7 * 24 horas)
    dias = (horas % 168) / 24; // O resto da divisão por 168 dará as horas restantes, que são então divididas por 24 para obter a quantidade de dias
    horas_restantes = horas % 24; // O resto da divisão por 24 dará a quantidade de horas restantes

    printf("%d horas equivalem a %d semanas, %d dias e %d horas.\n", horas, semanas, dias, horas_restantes);

    return 0;
}