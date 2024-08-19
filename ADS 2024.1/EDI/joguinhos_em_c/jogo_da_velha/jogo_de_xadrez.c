#include <stdio.h>
#include <stdlib.h>

#define BOARD_SIZE 8

// Definição das peças
#define EMPTY ' '
#define WHITE_PAWN 'P'
#define WHITE_ROOK 'R'
#define WHITE_KNIGHT 'N'
#define WHITE_BISHOP 'B'
#define WHITE_QUEEN 'Q'
#define WHITE_KING 'K'
#define BLACK_PAWN 'p'
#define BLACK_ROOK 'r'
#define BLACK_KNIGHT 'n'
#define BLACK_BISHOP 'b'
#define BLACK_QUEEN 'q'
#define BLACK_KING 'k'

char board[BOARD_SIZE][BOARD_SIZE];

// Função para inicializar o tabuleiro
void initBoard() {
    // Coloca as peças brancas
    board[0][0] = WHITE_ROOK;
    board[0][1] = WHITE_KNIGHT;
    board[0][2] = WHITE_BISHOP;
    board[0][3] = WHITE_QUEEN;
    board[0][4] = WHITE_KING;
    board[0][5] = WHITE_BISHOP;
    board[0][6] = WHITE_KNIGHT;
    board[0][7] = WHITE_ROOK;
    for (int i = 0; i < BOARD_SIZE; i++) {
        board[1][i] = WHITE_PAWN;
    }
    
    // Coloca as peças pretas
    board[7][0] = BLACK_ROOK;
    board[7][1] = BLACK_KNIGHT;
    board[7][2] = BLACK_BISHOP;
    board[7][3] = BLACK_QUEEN;
    board[7][4] = BLACK_KING;
    board[7][5] = BLACK_BISHOP;
    board[7][6] = BLACK_KNIGHT;
    board[7][7] = BLACK_ROOK;
    for (int i = 0; i < BOARD_SIZE; i++) {
        board[6][i] = BLACK_PAWN;
    }
    
    // Coloca os espaços vazios
    for (int i = 2; i < 6; i++) {
        for (int j = 0; j < BOARD_SIZE; j++) {
            board[i][j] = EMPTY;
        }
    }
}

// Função para desenhar o tabuleiro
void drawBoard() {
    printf("  a b c d e f g h\n");
    printf("  ---------------\n");
    for (int i = 0; i < BOARD_SIZE; i++) {
        printf("%d|", 8 - i);
        for (int j = 0; j < BOARD_SIZE; j++) {
            printf("%c ", board[i][j]);
        }
        printf("|%d\n", 8 - i);
    }
    printf("  ---------------\n");
    printf("  a b c d e f g h\n");
}

int main() {
    initBoard();
    
    while (1) {
        system("cls"); // Limpa a tela (Windows)
        drawBoard();
        
        // Aqui você pode adicionar a lógica do jogo, como solicitar as jogadas dos jogadores
        // e verificar as regras do xadrez
        
        // Exemplo de uma jogada simples
        board[1][0] = EMPTY;
        board[2][0] = WHITE_PAWN;
        
        // Verifica se o jogo terminou (rei capturado, empate, etc.)
        // Se sim, sai do loop
        break;
    }
    
    return 0;
}