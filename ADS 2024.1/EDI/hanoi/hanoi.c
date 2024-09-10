#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MAX_NODES 20

typedef struct {
    char nodes[MAX_NODES];
    int top;
} Torre;

void inicializar_torre(Torre *torre, int nivel);
void mover(Torre *origem, Torre *destino);
int verificar_fim(Torre *torres);
void imprimir_torres(Torre *torres);
void jogar(int nivel);

int main() {
    int nivel;

    printf("Escolha o nível (1-Básico, 2-Intermediário, 3-Avançado): ");
    scanf("%d", &nivel);

    if (nivel < 1 || nivel > 3) {
        printf("Nível inválido! Por favor, escolha entre 1 e 3.\n");
        return 1;
    }

    jogar(nivel);
    return 0;
}

void inicializar_torre(Torre *torre, int nivel) {
    int num_nodes = (nivel == 1) ? 10 : (nivel == 2) ? 15 : 20;
    torre->top = -1;

    for (int i = 0; i < num_nodes; i++) {
        char node = "RGB"[rand() % 3]; // Gera R, G ou B aleatoriamente
        torre->nodes[++torre->top] = node;
    }
}

void mover(Torre *origem, Torre *destino) {
    if (origem->top >= 0) {
        char node = origem->nodes[origem->top--];
        destino->nodes[++destino->top] = node;
        printf("Mover %c de Torre %c para Torre %c.\n", node, 'R' + (origem - &origem[0]), 'R' + (destino - &origem[0]));
    } else {
        printf("Torre %c está vazia!\n", 'R' + (origem - &origem[0]));
    }
}

int verificar_fim(Torre *torres) {
    for (int i = 0; i < 3; i++) {
        if (torres[i].top >= 0) {
            char tipo = torres[i].nodes[0];
            for (int j = 1; j <= torres[i].top; j++) {
                if (torres[i].nodes[j] != tipo) {
                    return 0; // Jogo não terminado
                }
            }
        }
    }
    return 1; // Jogo terminado
}

void imprimir_torres(Torre *torres) {
    for (int i = 0; i < 3; i++) {
        printf("Torre %c: ", 'R' + i);
        for (int j = 0; j <= torres[i].top; j++) {
            printf("%c ", torres[i].nodes[j]);
        }
        printf("\n");
    }
}

void jogar(int nivel) {
    Torre torres[3];
    int operacoes = 0;

    srand(time(NULL));
    inicializar_torre(&torres[0], nivel);
    inicializar_torre(&torres[1], 0); // Torre G vazia
    inicializar_torre(&torres[2], 0); // Torre B vazia

    printf("Torre R inicial: ");
    imprimir_torres(torres);

    while (!verificar_fim(torres)) {
        char comando[3];
        printf("Digite a operação (ex: RB para mover de R para B): ");
        scanf("%s", comando);

        if (comando[0] >= 'R' && comando[0] <= 'B' && comando[1] >= 'R' && comando[1] <= 'B' && comando[0] != comando[1]) {
            mover(&torres[comando[0] - 'R'], &torres[comando[1] - 'R']);
            operacoes++;
            imprimir_torres(torres);
        } else {
            printf("Operação inválida. Tente novamente.\n");
        }
    }

    printf("Jogo concluído em %d operações!\n", operacoes);
}