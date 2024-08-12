#include <stdio.h>
#include "ponto.h"

void mostrarMenu() {
    printf("\nMenu:\n");
    printf("1. Inserir coordenadas do primeiro ponto\n");
    printf("2. Inserir coordenadas do segundo ponto\n");
    printf("3. Imprimir pontos\n");
    printf("4. Calcular distância entre os pontos\n");
    printf("5. Sair\n");



}

int main() {
    float x1, y1, x2, y2;
    Ponto p1, p2;
    int opcao;

    while (1) {
        mostrarMenu();
        printf("Escolha uma opção: ");
        scanf("%d", &opcao);


        if (opcao == 1) {
            printf("Digite as coordenadas do primeiro ponto (x1, y1): ");
            
            scanf("%f %f", &x1, &y1);
            p1 = criarPonto(x1, y1);
            printf("Ponto 1 inserido com sucesso!\n");
        } else if (opcao == 2) {
            printf("Digite as coordenadas do segundo ponto (x2, y2): ");

            scanf("%f %f", &x2, &y2);
            p2 = criarPonto(x2, y2);
            printf("Ponto 2 inserido com sucesso!\n");
        } else if (opcao == 3) {
            printf("Ponto 1: ");
            imprimirPonto(p1);
            printf("Ponto 2: ");
            imprimirPonto(p2);

        } else if (opcao == 4) {
            float distancia = calcularDistancia(p1, p2);
            printf("A distância entre os pontos é: %.2f\n", distancia);
        } else if (opcao == 5) {
            printf("Saindo...\n");
            return 0;
        } else {
            printf("Opção inválida! Tente novamente.\n");
        }

    }

    return 0;


}



/*

int main() {
    float x1, y1, x2, y2;    
    printf("Digite as coordenadas do primeiro ponto (x1, y1)");
    scanf("%f %f", &x1, &y1);
    Ponto p1 = criarPonto(x1, y1);

    printf("Digite as coordenadas do segundo ponto (x2, y2): ");
    scanf("%f %f", &x2, &y2);
    Ponto p2 = criarPonto(x2, y2);

    printf("Ponto 1: ");
    imprimirPonto(p2);

    float distancia = calcularDistancia(p1, p2);
    printf("A distância entre os pontos é: %.2f\n", distancia);


    return 0;


}

*/