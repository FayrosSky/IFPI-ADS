#include <stdio.h>

int main() {
    float fahrenheit, celsius;

    printf("Digite a temperatura em Fahrenheit: ");
    scanf("%f", &fahrenheit);

    celsius = (5 * (fahrenheit - 32)) / 9;
    printf("A temperatura em Celsius é %.2f.\n", celsius);

    return 0;
}