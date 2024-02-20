#include <stdio.h>
#include <math.h>

int main() {
    int binario, decimal = 0, i = 0;

    printf("Digite um número inteiro de 4 dígitos binários: ");
    scanf("%d", &binario);

    while (binario != 0) {
        int resto = binario % 10;
        decimal += resto * pow(2, i);
        binario /= 10;
        i++;
    }

    printf("O número binário %d equivale a %d na base decimal.\n", binario, decimal);

    return 0;
}