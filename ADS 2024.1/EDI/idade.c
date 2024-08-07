#include<stdio.h>

int main(){
    int ano;
    char nome[10] //temos que dizer o tamanho do vetor.. isso tá nos dizendo que é até 10 caracteres.
    
    printf("Qual seu nome: ");
    scanf("%s", nome);

    //ano = 1984;
    printf("Em qual ano você nasceu?");
    scanf("%d", &ano); //%d quer dizer que o scanf espera um inteiro e o & quer dizer que tá direcionando para o endereço de memória ano
    int idade = 2024 - ano;

    printf("Em 2024 você terá %d anos.\n", idade); //o %d para dizer que será um inteiro, e deopois, no final depois da virgula vamos listar esses inteiros.
    


}