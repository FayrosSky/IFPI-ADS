#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_WORD_LENGTH 20

char word[MAX_WORD_LENGTH];
char guesses[26];
int wrongGuesses = 0;

// Função para inicializar o jogo
void initGame() {
    // Escolhe uma palavra aleatória (você pode usar uma lista de palavras predefinidas)
    strcpy(word, "FORCA");
    
    // Inicializa o array de letras adivinhadas
    memset(guesses, 0, sizeof(guesses));
}

// Função para desenhar o boneco da forca
void drawHangman() {
    printf("  +---+\n");
    printf("  |   |\n");
    
    if (wrongGuesses >= 1) {
        printf("  O   |\n");
    } else {
        printf("      |\n");
    }
    
    if (wrongGuesses == 2) {
        printf("  |   |\n");
    } else if (wrongGuesses == 3) {
        printf(" /|   |\n");
    } else if (wrongGuesses >= 4) {
        printf(" /|\\  |\n");
    } else {
        printf("      |\n");
    }
    
    if (wrongGuesses == 5) {
        printf(" /    |\n");
    } else if (wrongGuesses >= 6) {
        printf(" / \\  |\n");
    } else {
        printf("      |\n");
    }
    
    printf("      |\n");
    printf("=========\n");
}

// Função para desenhar a palavra com letras adivinhadas
void drawWord() {
    for (int i = 0; i < strlen(word); i++) {
        if (guesses[tolower(word[i]) - 'a']) {
            printf("%c ", word[i]);
        } else {
            printf("_ ");
        }
    }
    printf("\n");
}

// Função para verificar se o jogador venceu
int checkWin() {
    for (int i = 0; i < strlen(word); i++) {
        if (!guesses[tolower(word[i]) - 'a']) {
            return 0;
        }
    }
    return 1;
}

int main() {
    char guess;
    
    initGame();
    
    while (wrongGuesses < 6) {
        system("cls"); // Limpa a tela (Windows)
        drawHangman();
        printf("\nLetras erradas: ");
        for (int i = 0; i < 26; i++) {
            if (guesses[i]) {
                printf("%c ", 'a' + i);
            }
        }
        printf("\n\n");
        drawWord();
        
        // Verifica se o jogador venceu
        if (checkWin()) {
            printf("\nParabéns, você venceu!\n");
            break;
        }
        
        printf("\nAdivinhe uma letra: ");
        scanf(" %c", &guess);
        
        // Verifica se a letra já foi adivinhada
        if (guesses[tolower(guess) - 'a']) {
            printf("Você já adivinhava essa letra. Tente novamente.\n");
            system("pause");
            continue;
        }
        
        // Marca a letra como adivinhada
        guesses[tolower(guess) - 'a'] = 1;
        
        // Verifica se a letra está na palavra
        if (!strchr(word, toupper(guess))) {
            printf("Letra errada!\n");
            wrongGuesses++;
            system("pause");
        }
    }
    
    if (wrongGuesses == 6) {
        system("cls");
        drawHangman();
        printf("\nGame Over! A palavra era %s.\n", word);
    }
    
    return 0;
}