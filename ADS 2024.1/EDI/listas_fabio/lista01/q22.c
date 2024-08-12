#include <stdio.h>

int main() {
    float km, metros;

    printf("Digite o valor em quilômetros: ");
    scanf("%f", &km);

    metros = km * 1000;
    printf("O valor em metros é: %.2f m\n", metros);

    return 0;
}