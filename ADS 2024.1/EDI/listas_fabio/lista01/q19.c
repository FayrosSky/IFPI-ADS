#include <stdio.h>
#include <math.h>

int main() {
    float raio, volume;
    const float pi = 3.14;

    printf("Digite o valor do raio da esfera: ");
    scanf("%f", &raio);

    volume = (4 * pi * pow(raio, 3)) / 3;
    printf("O volume da esfera é %.2f.\n", volume);

    return 0;
}