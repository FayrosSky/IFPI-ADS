#include <stdio.h>
#include <locale.h> //pra mudar a codificação
/* *********************************************
*   Programa criado por Gustavo Guanabara *
*   Para o curso de Linguagem C do        *
*   Estudonauta
************************************************/

void main(){
    setlocale(LC_ALL, "Portuguese"); //Muda a zona de codificação de caracteres 
    printf("C é \"SUPER\" fácil!\n");



}