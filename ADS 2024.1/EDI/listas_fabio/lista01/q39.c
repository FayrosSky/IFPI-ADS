#include <stdio.h>

int main() {
    int anosFumante, cigarrosPorDia;
    float precoCarteira, precoCigarro, gastoTotal;

    printf("Digite o número de anos que você fuma: ");
    scanf("%d", &anosFumante);

    printf("Digite o número de cigarros que você fuma por dia: ");
    scanf("%d", &cigarrosPorDia);

    printf("Digite o preço de uma carteira de cigarros: ");
    scanf("%f", &precoCarteira);

    precoCigarro = precoCarteira / 20; // Calcula o preço de cada cigarro
    gastoTotal = anosFumante * 365 * cigarrosPorDia * precoCigarro; // Calcula o gasto total

    printf("Você já gastou R$ %.2f em cigarros.\n", gastoTotal);

    return 0;
}