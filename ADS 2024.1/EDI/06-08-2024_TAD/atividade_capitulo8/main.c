// main.c
#include <stdio.h>
#include "ponto.h"

int main() {
    float x1, y1, x2, y2, deltaX, deltaY;

    // Solicitar ao usuário as coordenadas do primeiro ponto
    printf("Digite as coordenadas do primeiro ponto (x y): ");
    scanf("%f %f", &x1, &y1);

    // Criar o primeiro ponto
    Ponto* ponto1 = criar_ponto(x1, y1);
    if (ponto1 == NULL) {
        fprintf(stderr, "Erro ao alocar memória para o primeiro ponto.\n");
        return 1;
    }

    // Imprimir ponto inicial
    imprimir_ponto(ponto1);

    // Solicitar ao usuário as coordenadas do segundo ponto
    printf("Digite as coordenadas do segundo ponto (x y): ");
    scanf("%f %f", &x2, &y2);

    // Criar o segundo ponto
    Ponto* ponto2 = criar_ponto(x2, y2);
    if (ponto2 == NULL) {
        fprintf(stderr, "Erro ao alocar memória para o segundo ponto.\n");
        liberar_ponto(ponto1);
        return 1;
    }

    // Imprimir o segundo ponto
    imprimir_ponto(ponto2);

    // Calcular e imprimir a distância entre os pontos
    float distancia = calcular_distancia(ponto1, ponto2);
    if (distancia >= 0) {
        printf("A distância entre os pontos é: %.2f\n", distancia);
    } else {
        printf("Erro ao calcular a distância.\n");
    }

    // Liberar a memória dos pontos
    liberar_ponto(ponto1);
    liberar_ponto(ponto2);

    return 0;
}