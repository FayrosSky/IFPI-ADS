#include <stdio.h>

int main() {
    int numero, soma = 0;

    printf("Digite um número inteiro de 4 dígitos: ");
    scanf("%d", &numero);

    // Calcula a soma dos dígitos
    while (numero != 0) {
        soma += numero % 10;  // Adiciona o último dígito à soma
        numero /= 10;  // Remove o último dígito do número
    }

    printf("A soma dos elementos que compõem o número é: %d\n", soma);

    return 0;
}