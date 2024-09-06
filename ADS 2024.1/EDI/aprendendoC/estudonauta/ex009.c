#include <stdio.h>

void main(){
    char nome[20];
    float n1, n2, m;
    printf("Nome do aluno: ");
    fflush(stdin); //sempre antes de ler vamos limpar o buffer pra garantir
    gets(nome);
    //scanf(" %c", nome);
    printf("Nota 1: ");
    fflush(stdin);
    scanf(" %f", &n1 );
    printf("Nota 2: ");
    fflush(stdin);
    scanf(" %f", &n2);
    m = (n1 + n2) / 2;
    printf("O aluno %s tirou as notas %.1f e %.1f.", nome, n1, n2);
    printf("A média final foi de %.1f.\n", m);


}