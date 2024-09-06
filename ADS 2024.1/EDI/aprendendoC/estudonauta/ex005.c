#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void main(){
    srand(time(NULL));
    int n;
    int num = rand() % 5 + 1;

    printf("<<< EX005 - Será que você acerta? >>>\n");
    printf("Vou pensar em um número entre 1 e 5. Tente adivinhar!\nQual é o seu palpite?\n");
    scanf("%d", &n);
    printf("Eu pensei no número %d e você pensou no %d\n", num, n);
    




}
