#include <stdio.h>
int main(){
    int num;
    int ten;
    int hundred; 
    int unit;

    printf("Enter a 3-digit number: ");
    scanf("%d", &num);

    hundred = num / 100;
    ten = (num % 100) / 10;
    unit = (num % 100) % 10;
    
    printf("The inverse of the entered number %d is %d%d%d", num, unit, ten, hundred);






    return 0;
}