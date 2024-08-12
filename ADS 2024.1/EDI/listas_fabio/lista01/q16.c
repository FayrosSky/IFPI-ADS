#include<stdio.h>
int main(){
    float size;
    float area;

    
    printf("Enter the side value: ");
    scanf("%f", &size);

    

    area = size * size;

    printf("The area of the square with size %.2f is: %.2f", size, area);





    return 0;
}