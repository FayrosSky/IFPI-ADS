#include <stdio.h>
int main()
{
    int num1;
    int num2;

    printf("Enter a number: ");
    scanf("%d", &num1);


    printf("Enter another number: ");
    scanf("%d", &num2);
    
    printf("The entered numbers (%d , %d) rewritten in a inversed order is: (%d, %d)", num1, num2, num2, num1);

    return 0;
}