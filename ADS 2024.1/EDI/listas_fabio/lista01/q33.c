#include <stdio.h>

int main() {
    int numero, inverso = 0, soma;

    printf("Digite um número inteiro de 3 dígitos: ");
    scanf("%d", &numero);

    // Inverte o número
    while (numero != 0) {
        int digito = numero % 10;
        inverso = inverso * 10 + digito;
        numero /= 10;
    }

    // Calcula a soma
    soma = numero + inverso;

    printf("A soma entre %d e seu inverso %d é %d.\n", numero, inverso, soma);

    return 0;
}