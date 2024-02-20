#include <stdio.h>

int main() {
    float quantidadeLatao, quantidadeCobre, quantidadeZinco;

    printf("Digite a quantidade de latão desejada (em kg): ");
    scanf("%f", &quantidadeLatao);

    quantidadeCobre = quantidadeLatao * 0.7; 
    quantidadeZinco = quantidadeLatao * 0.3; 

    printf("Para produzir %.2f kg de latão, são necessários:\n", quantidadeLatao);
    printf("%.2f kg de cobre e %.2f kg de zinco.\n", quantidadeCobre, quantidadeZinco);

    return 0;
}