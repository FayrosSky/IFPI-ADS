#include <stdio.h>
int main(){
    int num1;
    int num2;
    int quotient;
    int remainder;

    printf("Enter a number: ");    
    scanf("%d", &num1);

    printf("Enter another number: ");
    scanf("%d", &num2);

    quotient = num1 / num2;
    remainder = num1 % num2;

    printf("The quotient and the remainder of the division between the numbers num1 and num2 are respectively: %d and %d", quotient, remainder);

    return 0;
}