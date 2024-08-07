#include <stdio.h>

int main() {
    float raio, comprimento;

    printf("Digite o valor do raio da circunferência: ");
    scanf("%f", &raio);

    comprimento = 2 * 3.14 * raio;
    printf("A circunferência tem comprimento de %.2f.\n", comprimento);

    return 0;
}