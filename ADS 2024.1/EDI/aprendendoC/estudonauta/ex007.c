#include<stdio.h>

void main(){
    int num, dob;
    float ter;
    printf("Digite um número:\n");
    scanf("%d", &num);
    dob = num * 2;
    ter = (float)num / 3; //Coerção(conversão automática de tipo)
    //printf("Analisando o número %d, seu dobro é %d e a terça parte é %.2f.\n", num, dob, ter);
    printf("Analisando o número %d, seu dobro é %d e a terça parte é %.2f.\n", num, (num * 2), (float)num/3);


}