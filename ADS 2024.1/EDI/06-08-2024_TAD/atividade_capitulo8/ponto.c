// ponto.c
#include <stdio.h>
#include <stdlib.h>
#include <math.h> // Para a função sqrt
#include "ponto.h"

// Função para criar um ponto
Ponto* criar_ponto(float x, float y) {
    Ponto* novo_ponto = (Ponto*)malloc(sizeof(Ponto));
    if (novo_ponto != NULL) {
        novo_ponto->x = x;
        novo_ponto->y = y;
    }
    return novo_ponto; // Retorna o ponteiro para o novo ponto ou NULL
}

// Função para mover um ponto
void mover_ponto(Ponto* ponto, float deltaX, float deltaY) {
    if (ponto != NULL) {
        ponto->x += deltaX;
        ponto->y += deltaY;
    }
}

// Função para imprimir as coordenadas de um ponto
void imprimir_ponto(const Ponto* ponto) {
    if (ponto != NULL) {
        printf("Ponto: (%.2f, %.2f)\n", ponto->x, ponto->y);
    }
}

// Função para calcular a distância entre dois pontos
float calcular_distancia(const Ponto* ponto1, const Ponto* ponto2) {
    if (ponto1 == NULL || ponto2 == NULL) {
        return -1; // Retorna -1 em caso de erro
    }
    float deltaX = ponto2->x - ponto1->x;
    float deltaY = ponto2->y - ponto1->y;
    return sqrt(deltaX * deltaX + deltaY * deltaY);
}

// Função para liberar a memória de um ponto
void liberar_ponto(Ponto* ponto) {
    free(ponto);
}