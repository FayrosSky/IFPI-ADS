#include <stdio.h>

int main() {
    int minutos, dias, horas, minutos_restantes;

    printf("Digite o número de minutos: ");
    scanf("%d", &minutos);

    horas = minutos / 60; 
    minutos_restantes = minutos % 60; 
    dias = horas / 24; 
    horas = horas % 24; 

    printf("%d minutos equivalem a %d dias, %d horas e %d minutos.\n", minutos, dias, horas, minutos_restantes);

    return 0;
}