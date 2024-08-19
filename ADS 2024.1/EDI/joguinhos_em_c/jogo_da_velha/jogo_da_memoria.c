#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 4 // Tamanho da grade (4x4)
#define TOTAL_PAIRS (SIZE * SIZE) / 2

char board[SIZE][SIZE]; // Grade do jogo
char display[SIZE][SIZE]; // Grade para exibir as cartas
int pairs[TOTAL_PAIRS]; // Array para armazenar pares

// Função para inicializar o jogo
void initGame() {
    int num = 0;
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            if (num < TOTAL_PAIRS) {
                board[i][j] = 'A' + num; // Adiciona letras para os pares
                pairs[num] = 1; // Marca o par
                num++;
            } else {
                num = 0; // Reinicia o número
            }
        }
    }

    // Embaralha as cartas
    for (int i = 0; i < SIZE * SIZE; i++) {
        int r = rand() % (SIZE * SIZE);
        char temp = board[i / SIZE][i % SIZE];
        board[i / SIZE][i % SIZE] = board[r / SIZE][r % SIZE];
        board[r / SIZE][r % SIZE] = temp;
    }

    // Inicializa a grade de exibição
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            display[i][j] = '*'; // Cartas viradas para baixo
        }
    }
}

// Função para desenhar o tabuleiro
void drawBoard() {
    printf("  0 1 2 3\n");
    for (int i = 0; i < SIZE; i++) {
        printf("%d ", i);
        for (int j = 0; j < SIZE; j++) {
            printf("%c ", display[i][j]);
        }
        printf("\n");
    }
}

// Função para verificar se o jogador encontrou um par
int checkMatch(int x1, int y1, int x2, int y2) {
    return board[x1][y1] == board[x2][y2];
}

// Função principal do jogo
int main() {
    srand(time(NULL));
    initGame();
    
    int foundPairs = 0;
    while (foundPairs < TOTAL_PAIRS) {
        drawBoard();
        int x1, y1, x2, y2;

        // Primeiro palpite
        printf("Escolha a primeira carta (linha coluna): ");
        scanf("%d %d", &x1, &y1);
        display[x1][y1] = board[x1][y1]; // Revela a carta

        drawBoard();

        // Segundo palpite
        printf("Escolha a segunda carta (linha coluna): ");
        scanf("%d %d", &x2, &y2);
        display[x2][y2] = board[x2][y2]; // Revela a carta

        drawBoard();

        // Verifica se é um par
        if (checkMatch(x1, y1, x2, y2)) {
            printf("Você encontrou um par: %c!\n", board[x1][y1]);
            foundPairs++;
        } else {
            printf("Não é um par. Tente novamente.\n");
            // Esconde as cartas novamente após um pequeno atraso
            sleep(2);
            display[x1][y1] = '*';
            display[x2][y2] = '*';
        }
    }

    printf("Parabéns! Você encontrou todos os pares!\n");
    return 0;
}