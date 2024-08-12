#include <stdio.h>

int main()
{
    int num1, num2;

    printf("Digite dois numeros inteiros: ");
    scanf("%d", &num1);
    scanf("%d", &num2);

    inverter(&num1, &num2);

    printf("Numeros invertidos: %d e %d\n", num1, num2);

    return 0;
}

void inverter(int *num1, int *num2)
{
    int temp = *num1;
    *num1 = *num2;
    *num2 = temp;
}