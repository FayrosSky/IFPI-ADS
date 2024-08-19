#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> // Para usleep

#define BOARD_WIDTH 10
#define BOARD_HEIGHT 20
#define EMPTY ' '

char board[BOARD_HEIGHT][BOARD_WIDTH];

// Estrutura para as peças
typedef struct {
    int x, y; // Posição da peça
    char shape[4][4]; // Forma da peça
} Piece;

// Funções para o jogo
void initBoard() {
    for (int i = 0; i < BOARD_HEIGHT; i++) {
        for (int j = 0; j < BOARD_WIDTH; j++) {
            board[i][j] = EMPTY;
        }
    }
}

void drawBoard() {
    system("clear"); // Limpa a tela (Linux)
    for (int i = 0; i < BOARD_HEIGHT; i++) {
        for (int j = 0; j < BOARD_WIDTH; j++) {
            printf("%c ", board[i][j]);
        }
        printf("\n");
    }
}

Piece createPiece() {
    Piece piece;
    piece.x = BOARD_WIDTH / 2 - 1; // Posição inicial
    piece.y = 0; // Começa na parte superior

    // Forma de um bloco (peça simples)
    piece.shape[0][0] = 'X';
    piece.shape[0][1] = 'X';
    piece.shape[1][0] = 'X';
    piece.shape[1][1] = 'X';

    return piece;
}

int checkCollision(Piece piece) {
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            if (piece.shape[i][j] != EMPTY) {
                int newX = piece.x + j;
                int newY = piece.y + i;
                if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
                    return 1; // Colisão com a borda
                }
                if (newY >= 0 && board[newY][newX] != EMPTY) {
                    return 1; // Colisão com outra peça
                }
            }
        }
    }
    return 0; // Sem colisão
}

void placePiece(Piece piece) {
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            if (piece.shape[i][j] != EMPTY) {
                board[piece.y + i][piece.x + j] = piece.shape[i][j];
            }
        }
    }
}

void clearLines() {
    for (int i = BOARD_HEIGHT - 1; i >= 0; i--) {
        int fullLine = 1;
        for (int j = 0; j < BOARD_WIDTH; j++) {
            if (board[i][j] == EMPTY) {
                fullLine = 0;
                break;
            }
        }
        if (fullLine) {
            // Remove a linha cheia
            for (int k = i; k > 0; k--) {
                for (int j = 0; j < BOARD_WIDTH; j++) {
                    board[k][j] = board[k - 1][j];
                }
            }
            // Limpa a linha superior
            for (int j = 0; j < BOARD_WIDTH; j++) {
                board[0][j] = EMPTY;
            }
            i++; // Verifica a linha novamente
        }
    }
}

int main() {
    initBoard();
    Piece currentPiece = createPiece();

    while (1) {
        drawBoard();
        if (!checkCollision(currentPiece)) {
            placePiece(currentPiece);
            clearLines();
        }
        
        // Move a peça para baixo
        currentPiece.y++;
        if (checkCollision(currentPiece)) {
            currentPiece.y--; // Volta uma linha
            placePiece(currentPiece); // Coloca a peça no tabuleiro
            currentPiece = createPiece(); // Cria uma nova peça
        }

        // Controle de entrada
        if (getchar() == 'a') { // Mover para a esquerda
            currentPiece.x--;
            if (checkCollision(currentPiece)) {
                currentPiece.x++; // Reverte o movimento
            }
        } else if (getchar() == 'd') { // Mover para a direita
            currentPiece.x++;
            if (checkCollision(currentPiece)) {
                currentPiece.x--; // Reverte o movimento
            }
        } else if (getchar() == 's') { // Acelerar para baixo
            currentPiece.y++;
            if (checkCollision(currentPiece)) {
                currentPiece.y--; // Reverte o movimento
            }
        }

        // Atraso para o movimento da peça
        usleep(500000); // 500 ms
    }

    return 0;
}