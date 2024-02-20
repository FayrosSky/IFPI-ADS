#include <stdio.h>
int main(){
    int number;
    int hundred;
    int ten;
    int unit, sum;

    printf("Enter a 3 digit number: ");
    scanf("%d", &number);

    hundred = number / 100;
    ten = (number % 100)/10;
    unit = (number % 100) % 10;

    sum = hundred + ten + unit;

    printf("The sum of the units, tens and hundreds of the entered number %d is: %d", number, sum);

    return 0;
}