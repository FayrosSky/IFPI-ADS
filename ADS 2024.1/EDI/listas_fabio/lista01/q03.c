#include <stdio.h>
int main(){

    int value_minutes_total; 
    int value_minutes;
    int value_hour;

    printf("Enter a value in minutes: ");
    scanf("%d", &value_minutes_total);

    value_hour = value_minutes_total / 60;
    value_minutes = value_minutes_total % 60;

    printf("The value of %.d converted to hours and minutes are: %.d h %.d min", value_minutes_total, value_hour, value_minutes);


    return 0;
}