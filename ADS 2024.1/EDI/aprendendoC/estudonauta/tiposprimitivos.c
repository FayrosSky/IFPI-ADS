#include<stdio.h>
/*
    Tipos primitivos:
    * char (signed, unsigned) 
    * int (short, long, signed, unsigned) //int ocupa 4 bytes na memória pra guardar um inteiro, o tipo short vai guardar metade, ou seja, 2 bytes. Já long vai guardar o dobro, 8 bytes. Signed e Unsigned não vai interferir na quantidade de bytes que ele vai aceitar, mas sim na quantidade de números que ele vai aceitar. Ninguém tem, por exemplo, -18 anos, então, declaramos como unsigned int, ou seja, um número inteiro que não tem sinal, ele é positivo sempre. Quando colocamos unsigned desocupamos o bit do sinal, permitindo que guardemos números maiores do que teríamos com o int tradicional. Agora, se quisermos que tenha precisão de sinal, colocamos o signed. 
    * float //precisa de 4 bytes pra guardar um número(ocupa 4 bytes na memória)
    * double // é o dobro do ponto flutuante, ouse seja, 8 bytes.
    * void //Armazena o valor vazio

*/

/*
string de formatações:
    %d inteiro
    %f float
    %c
    %s string
    %i inteiro
    %e notação neperiana
    %hd short int(h é do short e o d é de int)
    %ld long int 
    %hu unsigned short
    %u  unsigned int
    %lu unsigned long
*/


void main(){
    printf("O %s tem %i anos\n", "Lucas", 39);
    printf("Seu peso atual é de: %6.2fkg\n", 97.5);
    printf("O seu sexo é %c\n", 'M');









}