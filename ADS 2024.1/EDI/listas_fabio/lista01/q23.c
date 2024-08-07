#include <stdio.h>

int main() {
    float kg, gramas;

    printf("Digite o valor em quilogramas: ");
    scanf("%f", &kg);

    gramas = kg * 1000;
    printf("O valor em gramas é: %.2f g\n", gramas);

    return 0;
}