#include <stdio.h>
int main(){
    float salary;
    float new_salary;

    printf("Enter the salary amount: ");
    scanf("%f", &salary);

    new_salary = salary * 1.25;

    printf("Your new salary is: %.2f R$", new_salary);



    return 0;
}