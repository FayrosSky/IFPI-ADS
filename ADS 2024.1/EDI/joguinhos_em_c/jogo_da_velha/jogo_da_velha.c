#include <stdio.h>
#include <stdlib.h>

//Declaração do tabuleiro
char tabuleiro[3][3]{
    {' ', ' ', ' '},
    {' '. ' ', ' '},
    {' ', ' ', ' '}
}

//Função para inicializar o tabuleiro
void inicializar() {
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            tabuleiro[i][j] = ' ';
        }
    }
}

//Função para imprimir o tabuleiro
void imprimirTabuleiro() {
    printf(" %c | %c \n", tabuleiro[0][0], tabuleiro[0][1], tabuleiro[0][2]);

}




int main()
{
    char jogador = 'X';
    int jogadas = 0;

    inicializar()

    while(1) {
        system("clear");
        imprimirTabuleiro();

        lerJogada(jogador);
        jogadas++;

        if(verificarVitoria(jogador)){
            system("clear");
            imprimirTabuleiro();
            printf("Jogador %c venceu!\n", jogador);
            break;
        }

        if(jogadas == 9){
            sytem("clear");
            imprimirTabuleiro();
            printf("Empate!\n");
            break;
        }

        if(jogador == 'X'){
            jogador = 'O';
        }
        else
            jogador = 'X';

    }

 
    return 0;
}




