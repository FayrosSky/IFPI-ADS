#include<stdio.h>

void calcular_velocidade(double *vms, double *vkmh){
    *vkmh = *vms * 3.6;
}


int main(){
    double velocidade_ms;
    double velocidade_kmh;

    printf("Digite a velocidade em m/s: ");
    scanf("%1f", &velocidade_ms);

    calcular_velocidade(&velocidade_ms, &velocidade_kmh); //estamos passando os endereços das variáveis para a função o operador & obtém o endereço da variável. Isso permite que a função modifique diretamente o valor de 'velocidadekmh', que reside na memória.

    printf("A velocidade em km/h é: %.2f km/h\n", velocidade_kmh);








    return 0;
}