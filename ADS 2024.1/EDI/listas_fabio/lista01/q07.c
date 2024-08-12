#include <stdio.h>
int main(){

int number1;
int number2;
int number3;
int sum;
int subtraction;

printf("Enter a number: ");
scanf("%d", &number1);

printf("Enter a number: ");
scanf("%d", &number2);

printf("Enter a number: ");
scanf("%d", &number3);

sum = number1 + number2;
subtraction = number2 - number3;

printf("The sum between the first number and second number is %d and the subtraction between the second number and the third number is %d", sum, subtraction);

return 0;

}