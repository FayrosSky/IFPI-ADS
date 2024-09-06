#include <stdio.h>
#define total 8
/*
    Há duas formas de se trabalhar com constantes: atráves de uma constante diretamente ou através de uma diretiva de pré-processamento como vimos anteriormente quando damos o include.

    variáveis e constantes podem ter um nome e um tipo a diferença é que variável varia e constantes ficam constantes na memória e não variam

    para declara uma constante temos algumos modos:
    1° vamos sequer utilizar memória: colocamos o valor dentro de um diretiva e ele vai ser substituído diretamente pelo compilador: 
    sintaxe: #define nome constante valor;

    2° forma: 
        const tipo nome da constante = valor;
*/
void main(){
    int TOTAL = 8;
    TOTAL = 25;
    printf("%d\n", TOTAL);

    const int valor = 8;
    //valor = 25;
    printf("%d\n", valor);


    printf(total);


}