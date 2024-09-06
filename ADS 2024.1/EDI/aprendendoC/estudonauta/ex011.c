#include <stdio.h>

void main(){
    int num;
    printf("Digite um número: ");
    fflush(stdin);
    scanf("%i", &num);
    printf("O número que você digitou é %s\n", (num%2==0) ? "PAR":"ÌMPAR");

}