#include <stdio.h>

int main() {
    int anos, meses, dias, idadeEmDias;

    printf("Digite a idade em anos, meses e dias: ");
    scanf("%d %d %d", &anos, &meses, &dias);

    idadeEmDias = (anos * 365) + (meses * 30) + dias;

    printf("A idade expressa em dias é: %d\n", idadeEmDias);

    return 0;
}