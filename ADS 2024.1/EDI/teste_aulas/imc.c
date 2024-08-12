#include <stdio.h>

int main(){
    //kit pra pedir valor é essa strutura
    float peso;
    printf("Digite o seu peso: ");
    scanf("%f", &peso);

    //Vamos entrar nos ramos(fatias) dos condicionais
    if(peso <= 18.5){
        printf("Abaixo do peso\n")
    } else if(peso >= 18.5 && peso <= 24.9){
        
    } else if(peso >= 24.9 && peso <= 29.9){

    } else if(peso >= 29.9 && peso <= 34.9){

    } else if(peso >= 34.9 && peso <= 39.9){

    } else {
        printf("Peso ideal\n");
    }


    return 0
}