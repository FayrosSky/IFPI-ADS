#include <stdio.h>
int main(){ 
    float grade1;
    float grade2;
    float grade3;
    int weight1;
    int weight2;
    int weight3;
    float average;

    printf("Enter the first grade: ");
    scanf("%f", &grade1);

    printf("Enter the second grade: ");
    scanf("%f", &grade2);
    
    printf("Enter the second grade: ");
    scanf("%f", &grade3);

    printf("Enter the first weight: ");
    scanf("%d", &weight1);

    printf("Enter the first weight: ");
    scanf("%d", &weight2);

    printf("Enter the first weight: ");
    scanf("%d", &weight3);

    average = ((grade1 * weight1) + (grade2 * weight2) + (grade3 * weight3))/(weight1 + weight2 + weight3);

    printf("The average of the grades %.2f, %.2f, %.2f  with the weights %.2d, %.2d, %.2d is: %.2f ", grade1, grade2, grade3, weight1, weight2, weight3, average);


    return 0;
}