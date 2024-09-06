#include <stdio.h>

void main(){
    char produto[20];
    float preco, desc, novop;
    printf("Produto: ");
    fflush(stdin);
    scanf(" %s", produto);
    printf("Preço do %s:", produto);
    fflush(stdin);
    scanf(" %f", &preco);
    printf("Desconto: (%%):");
    fflush(stdin);
    scanf(" %f", desc);
    novop = (preco - (desc * preco)/100);
    printf("O produto %s custava R$%.2f.\n", produto, preco);
    printf("Porém, com %.2f%% de desconto, passa a custar R$%.2f.\n", desc, novop);




}