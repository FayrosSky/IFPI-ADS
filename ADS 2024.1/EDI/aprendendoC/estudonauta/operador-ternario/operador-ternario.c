#include <stdio.h>
/*
    queremos que em:
        (media>=7)
        sit = "Aprovado" ou "Reprovado"
        queremos que se media for maior ou igual a 7, que ele receba Aprovado ou reprovado. Tem um jetio de fazer sem usar condições e usando apenas uma linha, usando o operador ternáio(?).
        
        No exemplo c=(x>0)?4:8  essa linha está nos dizendo que c vai receber a variável 4 ou a veriável 8 dependendo se x > 0. Se for > 0 vai receber o 4, caso não vai receber o 8.  
*/

void main(){
    /*
    int a = 4, b = 8;
    int c = (a>b)?1:2; //lembrando que os operadores lógicos vão retornar ou 1 ou 0(a>b)
    printf("O resultado é %d\n", c);

    a = 14;
    c = (a>b)?1:2;
    printf("O resultado é %d\n", c);

    c = (a>b)?b*2:a+5;
    printf("O resultado e %i\n", c);

    a = 4; b = 8;
    c = (a>b)?b*2:a+5;
    printf("O resultado e %i\n", c);
    */

    //float media = 5.5;
    /*
        Forma errada de usar o ternário com strings
        char sit[10];
        sit = (media>=7)?"APROVADO":"REPROVADO";
    */
    //printf("Sua situação e %s\n", (media>=7)?"Aprovado":"Reprovado"); //forma certa de usar ternário com strings

    int n1, n2;
    printf("Digite um número: \n");
    scanf("%d", &n1);
    printf("Digite outro número: \n");
    scanf("%d", &n2);
    int maior = (n1>n2)?n1:n2;
    printf("Entre %d e %d, o maior foi %d\n", n1, n2, maior);














}