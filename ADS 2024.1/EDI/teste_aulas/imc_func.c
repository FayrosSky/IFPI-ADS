#include <stdio.h>

float imc(float pesoa, float altura); //Ex. de função em C

int main(){
    float peso, altura;
    printf("Por gentileza, digite seu peso e sua altura respectivamente: ");
    scanf("%f %f", &peso, &altura);

    float meu_imc = imc(peso, altura); //chamos a função passando o que ela espera receber

    printf("Seu IMC é %.1f\n", meu_imc);


    return 0;
}

float imc(float peso, float altura){

    return (peso / (altura) * (altura));
}