#include <stdio.h>
/*
    Comparações:
    == igual
    != diferente
    > maior
    < menor
    >= maior ou igual
    <= menor ou igual

    o resultada das operações dos operadores relacionais sempre é um resultado lógico(true e false)

*/
void main(){


    int a = 5;
    int b = 6;
    //int c = (a == b);
    //int c = (a >= b);
    //int c = (a <= b);
    //int c = (a < b);
    //int c = (a<b+3); // nesse caso virou uma expressão em que primeiro fazemos soma e depois avaliamos o valor lógico da expressão
    int c = (a+3<b);

    printf("O resultado e %i\n", c);



}

