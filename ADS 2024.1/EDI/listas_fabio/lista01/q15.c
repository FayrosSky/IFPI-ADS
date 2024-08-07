#include<stdio.h>
int main(){
    float base;
    float height;
    float area;

    
    printf("Enter the base value: ");
    scanf("%f", &base);

    printf("Enter the height value: ");
    scanf("%f", &height);

    area = (base * height)/2;

    printf("The area of the triangle with base %.2f and height %.2f is: %.2f", base, height, area);





    return 0;
}