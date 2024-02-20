#include <stdio.h>
int main(){
    float dollar_value;
    float dollar_quantity;  
    float real_value;

    printf("Enter the dollar exchange rate: ");
    scanf("%f", &dollar_value);

    printf("Enter the dollar quantity: ");
    scanf("%f", &dollar_quantity);

    real_value = dollar_value * 4.97;

    printf("The value of %.2f with the dollar exchange rate of %.2f converted to real are: %.2f", dollar_quantity, dollar_value, real_value);







    return 0;
}