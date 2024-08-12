#include <stdio.h>
int main(){
    float velocity_kmh;
    float velocity_ms;

    printf("Enter a velocity in km/h: ");
    scanf("%f", &velocity_kmh);

    velocity_ms = velocity_kmh / 3.6;

    printf("The entered velocity of %.2f km/h converted to m/s is: %.2f m/s", velocity_kmh, velocity_ms);


    return 0;
}