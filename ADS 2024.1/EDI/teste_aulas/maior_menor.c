#include <stdio.h>

int main(){

    printf("De Maior ou De Menor");

    int idade;
    printf("Por gentileza, sua idade: ")
    scanf("%d", &idade);

    char resultado[10]; //Com o char estamos criando um vetor de caracteres(uma string);

    resultado = idade >= 18 ? "DE MAIOR" : "DE MENOR";




    return 0;
}