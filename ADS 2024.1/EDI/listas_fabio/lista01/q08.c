#include <stdio.h>
int main(){
    int number1;    
    int number2;
    int sum;
    int subtraction;
    float division;

    printf("Enter a number: ");
    scanf("%d", &number1);

    printf("Enter a second number: ");
    scanf("%d", &number2);

    sum = number1 + number2;
    subtraction = number1 - number2;

    division = sum / subtraction;

    printf("The division between the sum by the subtraction of the numbers %d and %d is: %.2f.", number1, number2, division);


    return 0;
}