#include <stdio.h>

void calcular_valor_minutos_total(double *horas, double *minutos){
    *minutos = *horas * 60 + *minutos;
}

int main(){

    double valor_horas;
    double valor_minutos;

    printf("Digite o valor em horas: ");
    scanf("%1f", &valor_horas);

    printf("Digite o valor em minutos: ");
    scanf("%1f", &valor_minutos);

    calcular_valor_minutos_total(&valor_horas, &valor_minutos);


    return 0;
    
}