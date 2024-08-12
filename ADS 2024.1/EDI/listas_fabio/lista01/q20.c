#include <stdio.h>

int main() {
    float celsius, fahrenheit;

    printf("Digite a temperatura em Celsius: ");
    scanf("%f", &celsius);

    fahrenheit = (9 * celsius + 160) / 5;
    printf("A temperatura em Fahrenheit é %.2f.\n", fahrenheit);

    return 0;
}