#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void main(){
    srand(time(NULL));
    int n = rand() % 50 + 1; //% 10 para gerar um número entre 0 e 9
    printf("Eu gerei um número (%d)\n", n);




}