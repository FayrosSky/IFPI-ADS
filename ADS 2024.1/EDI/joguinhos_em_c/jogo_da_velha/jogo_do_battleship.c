#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 5 // Tamanho do tabuleiro
#define TOTAL_SHIPS 3 // Número de navios

char playerBoard[SIZE][SIZE]; // Tabuleiro do jogador
char computerBoard[SIZE][SIZE]; // Tabuleiro do computador
int playerHits = 0; // Acertos do jogador
int computerHits = 0; // Acertos do computador

// Função para inicializar os tabuleiros
void initBoards() {
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            playerBoard[i][j] = '~'; // Água
            computerBoard[i][j] = '~'; // Água
        }
    }
}

// Função para colocar navios no tabuleiro do computador
void placeShips(char board[SIZE][SIZE]) {
    int placedShips = 0;
    while (placedShips < TOTAL_SHIPS) {
        int x = rand() % SIZE;
        int y = rand() % SIZE;

        // Verifica se já existe um navio na posição
        if (board[x][y] != 'S') {
            board[x][y] = 'S'; // Coloca um navio
            placedShips++;
        }
    }
}

// Função para exibir o tabuleiro do jogador
void displayPlayerBoard() {
    printf("Tabuleiro do Jogador:\n");
    printf("  0 1 2 3 4\n");
    for (int i = 0; i < SIZE; i++) {
        printf("%d ", i);
        for (int j = 0; j < SIZE; j++) {
            printf("%c ", playerBoard[i][j]);
        }
        printf("\n");
    }
}

// Função para exibir o tabuleiro do computador
void displayComputerBoard() {
    printf("Tabuleiro do Computador:\n");
    printf("  0 1 2 3 4\n");
    for (int i = 0; i < SIZE; i++) {
        printf("%d ", i);
        for (int j = 0; j < SIZE; j++) {
            if (computerBoard[i][j] == 'S') {
                printf("~ "); // Mostra água em vez de navio
            } else {
                printf("%c ", computerBoard[i][j]);
            }
        }
        printf("\n");
    }
}

// Função para o ataque do jogador
void playerAttack() {
    int x, y;
    printf("Digite as coordenadas do ataque (linha coluna): ");
    scanf("%d %d", &x, &y);

    if (x < 0 || x >= SIZE || y < 0 || y >= SIZE) {
        printf("Coordenadas inválidas! Tente novamente.\n");
        playerAttack();
        return;
    }

    if (computerBoard[x][y] == 'S') {
        printf("Acertou um navio!\n");
        computerBoard[x][y] = 'H'; // Marca como hit
        playerHits++;
    } else if (computerBoard[x][y] == '~') {
        printf("Água!\n");
        computerBoard[x][y] = 'M'; // Marca como miss
    } else {
        printf("Você já atacou essa posição!\n");
    }
}

// Função para o ataque do computador
void computerAttack() {
    int x, y;
    do {
        x = rand() % SIZE;
        y = rand() % SIZE;
    } while (playerBoard[x][y] == 'H' || playerBoard[x][y] == 'M'); // Evita repetir ataques

    if (playerBoard[x][y] == 'S') {
        printf("O computador acertou um navio na posição (%d, %d)!\n", x, y);
        playerBoard[x][y] = 'H'; // Marca como hit
        computerHits++;
    } else {
        printf("O computador atacou a posição (%d, %d) e errou!\n", x, y);
        playerBoard[x][y] = 'M'; // Marca como miss
    }
}

// Função principal do jogo
int main() {
    srand(time(NULL));
    initBoards();
    placeShips(computerBoard);

    // Coloca navios no tabuleiro do jogador
    printf("Coloque seus navios no tabuleiro (3 navios). Digite as coordenadas (linha coluna):\n");
    for (int i = 0; i < TOTAL_SHIPS; i++) {
        int x, y;
        printf("Navio %d: ", i + 1);
        scanf("%d %d", &x, &y);
        if (x >= 0 && x < SIZE && y >= 0 && y < SIZE && playerBoard[x][y] == '~') {
            playerBoard[x][y] = 'S'; // Coloca um navio
        } else {
            printf("Coordenadas inválidas ou já ocupadas! Tente novamente.\n");
            i--; // Tenta novamente para o mesmo navio
        }
    }

    // Loop principal do jogo
    while (playerHits < TOTAL_SHIPS && computerHits < TOTAL_SHIPS) {
        displayComputerBoard();
        playerAttack();
        if (computerHits == TOTAL_SHIPS) {
            break; // Sai se o jogador ganhar
        }
        computerAttack();
    }

    // Verifica o resultado
    if (playerHits == TOTAL_SHIPS) {
        printf("Parabéns! Você afundou todos os navios do computador!\n");
    } else {
        printf("O computador afundou todos os seus navios. Game Over!\n");
    }

    return 0;
}