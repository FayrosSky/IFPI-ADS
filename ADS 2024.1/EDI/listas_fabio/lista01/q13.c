#include <stdio.h>
int main(){

    float real_amount;
    float new_real_amount;
    
    printf("Enter a real value: ");
    scanf("%f", &real_amount);

    new_real_amount = real_amount * 0.7;

    printf("70 percent of the written real amount is: %.2f", new_real_amount);

    return 0;
}