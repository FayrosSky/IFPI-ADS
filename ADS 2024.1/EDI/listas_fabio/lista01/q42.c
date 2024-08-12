#include <stdio.h>
#include <math.h>

int main() {
    int x1, y1, x2, y2;
    float distancia;

    printf("Digite as coordenadas do primeiro ponto (x1 y1): ");
    scanf("%d %d", &x1, &y1);

    printf("Digite as coordenadas do segundo ponto (x2 y2): ");
    scanf("%d %d", &x2, &y2);

    distancia = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));

    printf("A distância entre os dois pontos é: %f\n", distancia);

    return 0;
}