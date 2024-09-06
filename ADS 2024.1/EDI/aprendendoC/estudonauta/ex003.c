#include <stdio.h>

void main(){
    char nome[20];
    int idade;
    float peso;

    printf("Qual o seu nome?\n");
    scanf("%s", nome);
    printf("Quantos anos você tem?\n");
    scanf("%d", &idade);
    printf("Qual o seu peso? (Kg)\n");
    scanf("%f", &peso);

    printf("------<<< PROCESSANDO >>>------\n");
    printf("Muito prazer, %s. Você tem %d anos e pesa %2.fKg, correto?\nFIM.\n", nome, idade, peso);




}