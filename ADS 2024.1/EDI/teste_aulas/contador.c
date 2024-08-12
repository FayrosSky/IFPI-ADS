#include <stdio.h>

int main(){
    printf("\n CONTADOR ")


    int numero;
    printf("Digite um número: ");
    scanf("%d", &numero);

    int contador = 1; //começamos declarando o contador
    while(contador <= numero){ //Enquanto alguma coisa for verdade
        printf("%d\n", &contador);
        contador++;
    }

    printf("Fim do Loop.");
}