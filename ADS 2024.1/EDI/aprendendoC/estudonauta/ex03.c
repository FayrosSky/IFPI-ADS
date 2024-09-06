#include <stdio.h>
#include <locale.h>

void main(){
    setlocale(LC_ALL, "Portuguese");
    float n;
    printf("Digite um númro real: ");
    scanf("%f", &n);
    printf("Você digitou o número %.1f\n", n);
    




}