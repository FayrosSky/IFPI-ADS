#include <stdio.h>

void main(){
    char letra;
    char antes, depois;
    printf("Digite uma letra: \n");
    letra = getchar();
    printf("Antes da letra %c temos a letra %c. Depois temos a letra %c.\n", letra, (letra-1), (letra+1));
    antes = letra - 1;
    depois = letra + 1;
    printf("Antes da letra %c temos a letra %c. Depois temos a letra %c.\n", letra, antes, depois);
}