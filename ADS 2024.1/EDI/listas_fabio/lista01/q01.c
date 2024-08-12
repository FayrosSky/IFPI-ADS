#include <stdio.h>

int main(){
    float velocity_kmh;
    float velocity_ms;

    printf("Enter a velocity in kmh:");
    scanf("%f", &velocity_kmh);

    velocity_ms = velocity_kmh * 3.6;
    printf("The entered velocity of %.2f km/h conveterd to velocity in m/s is: %.2f", velocity_kmh, velocity_ms);

    return 0;
}