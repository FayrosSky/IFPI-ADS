#include <stdio.h>

int main(){
    int value_total;
    int value_hour;
    int value_minutes_total;
    int value_minutes;

    printf("Enter a value in hour and minutes. Ex: 135(1h and 35 min)");
    scanf("%d", &value_total);

    value_hour = value_total/100;
    value_minutes = value_total % 100;
    value_minutes_total = (value_hour * 60) + value_minutes;  

    printf("The values in hours and minutes are: %.d h and %.d min converted to minutes are: %.d", value_hour, value_minutes, value_minutes_total);

    return 0;
}