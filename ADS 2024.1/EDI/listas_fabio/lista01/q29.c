#include <stdio.h>

int main() {
    int meses, anos, meses_restantes;

    printf("Digite o número de meses: ");
    scanf("%d", &meses);

    anos = meses / 12; 
    meses_restantes = meses % 12;

    printf("%d meses equivalem a %d anos e %d meses.\n", meses, anos, meses_restantes);

    return 0;
}