#include <stdio.h>
/*
    int a;
    int b;
    float r = (float) a/b
    Na coerção de tipo vamos abrir e fechar parênteses com o tipo que queremos fazer a coerção  e a variável que queremos fazer a coerção. Nesse caso, iremos fazer a coerção do tipo float pra a variável inteira a. 
    importante observar que na coerção não fazemos mudamos o tipo primitivo da variável, apenas naquele linha o valor é consierando como ponto flutuante.


*/
void main(){
    /*
    int x = 5;
    int y = 2;
    
    float z = (float)x / (float)y;
    printf("O resultado e %2.f\n", z);
    
    */

    /*
    int n;
    printf("Digite um número inteiro: ");
    scanf("%i", &n);
    float t = (float)n/3;
    printf("A terça parte de %i é igual a %.2f\n", n, t);
    */

    int x = 65;
    printf("Eu tenho %c\n", (char)x); //aqui vai printar A pois o valor de A é 65 na tabela ascii code
    printf("Eu tenho %f\n", (float)x);


}