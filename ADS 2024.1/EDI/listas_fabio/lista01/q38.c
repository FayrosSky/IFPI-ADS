#include <stdio.h>

int main() {
    int num1, den1, num2, den2, numResultado, denResultado;

    printf("Digite o numerador e o denominador da primeira fração: ");
    scanf("%d %d", &num1, &den1);

    printf("Digite o numerador e o denominador da segunda fração: ");
    scanf("%d %d", &num2, &den2);

    numResultado = (num1 * den2) + (num2 * den1);
    denResultado = den1 * den2;

    printf("A soma das frações é: %d/%d\n", numResultado, denResultado);

    return 0;
}