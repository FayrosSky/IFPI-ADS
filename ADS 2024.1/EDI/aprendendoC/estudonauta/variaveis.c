#include <stdio.h>
/*
    Exemplos de variáveis e atributições
    unsigned int idade = 19;
    char nome[] = "Zé"; Lembrando que aspas simples botamos um caractere, aspas duplas colocomanos uma cadeia de caracteres.
    char *nome = "Ana"; Também podemos fazer uma cadeia de caracteres dessa forma.
    float media = 9.5;
*/

/*
    Regras Ling. C:
    * Toda variável começa com uma letra(dá até pra começar com o sublinhado, mas não é recomendado fazer, pois existem coisas internas do C que utilizam isso.
    * Maiúscukas e minúsculas fazem diferença.
    * Só usa letras, números e sublinhado
    * Nada de acentos
    * Não pode conter espaços
    * Não pode ter símbolos(só sublinhado)
    * Não pode ser uma palavra reservada(char, int, float, double, printf, scanf)
    
    Dica: colocar todas as variáveis de C em letras minúsculas, isso evita a maioria dos erros de principiantes.

*/

void main(){
    unsigned int idade = 33;
    float peso = 85.9;
    char sexo = 'F';
    //char nome[] = "Juvenal";
    char *nome = "Juvenal";
    printf("%s é do sexo %c, tem %i anos e pesa %.2fkg\n", nome, sexo, idade, peso);    




}