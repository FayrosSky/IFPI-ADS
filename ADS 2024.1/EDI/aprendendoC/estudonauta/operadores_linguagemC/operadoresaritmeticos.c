/*

+ (adição)
- (subtração)
* (multiplicação)
/ (divisão: se forem dados inteiros é uma divisão inteira, se forem dados reais é uma divisão real. Se tiver misto entre inteiro e real ele joga pra real.)  \(escape dentro de strings) | (usada para operação que pode ser bitwise ou lógica)
% (módulo ou resto da divisão)

*/

#include <stdio.h>
void main(){
    int a = 3;
    int b = 2;
    // int r = a + b; o + aqui é operador binário, pois tá unindo a e b
    int r = -b; //o - é um operador de inversão e como estão invertendo só o b ele é um operador unário.
    float divisao = a / b;
    printf("O resultado da soma de %f e %f é: %i e a divisão de %f por %f é: %.1f", a, b, r, a, b, divisao);



}