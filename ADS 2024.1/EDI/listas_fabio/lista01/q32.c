#include <stdio.h>

int main() {
    int numero, inverso = 0, digito;

    printf("Digite um número inteiro de 3 dígitos: ");
    scanf("%d", &numero);

    // Inverte o número
    while (numero != 0) {
        digito = numero % 10;
        inverso = inverso * 10 + digito;
        numero /= 10;
    }

    // Calcula a diferença
    int diferenca = numero - inverso;

    printf("A diferença entre %d e seu inverso %d é %d.\n", numero, inverso, diferenca);

    return 0;
}