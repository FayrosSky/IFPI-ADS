#include <stdio.h>
/*
    operadores lógicos:
        &&:  e(conjunção)
        ||:  ou(disjunção)
        !:   negação 

        resultado dos operadores lógicos sempre é verdadeiro ou falso(em C é 0 ou 1)
    
    precedência booleanas:
        ! > && > || 


*/

void main(){

    int a = 5, b = 4, c = 2;
    printf("%s\n", a > b?"Verdadeiro":"Falso");
    printf("%s\n", a > b && a > c?"Verdadeiro":"Falso");
    printf("%s\n", a > b || a > c?"Verdadeiro": "Falso");
    printf("%s\n", a>b || a<c && !c!=4?"Verdadeiro":"Falso");





}