#include <stdio.h>
#include <string.h>

void main(){

    
    /*

    char nome[10];
    nome = "Gustavo";
    printf("%s", nome);
    //Observe que a seguinte atribuição não dá certo

    
    */
    //A solução é a biblioteca string.h e a função strcpy() que é uma função interna de string.h que vai permitir que a gente copie conteúdos pra dentro de strings, ou seja, fazer a atribuição que a gente precisa. Com isso vamos poder fazer operador ternário e tudo que a gente precisa.

    /*
    
    char nome[10];
    char sit[10];
    float media = 3.5;
    strcpy(nome, "Gustavo");
    printf("Muito prazer %s!\n", nome);
    strcpy(sit, (media>=7)?"Aprovado":"Reprovado");
    printf("A situacao do aluno %s está %s\n", nome, sit);
        
    */

   //Agora, iremos usar o stringlen() para ver o comprimento da string;

   char nome[] = "Gustavo";
   int tam = strlen(nome);
   printf("O nome %s tm %i letras.\n", nome, tam);

   //strcmp() é uma função que serve para fazer a comparação entre duas strings
   char s1[] = "Gustavo ";
   char s2[] = "Guanabara";
   int res = strcmp(s1, s2); //retorna 0 se são iguais e 1 se são diferentes
   printf("O resultado da comparação é %d\n", res);

    //strcat() serve pra concatenar duas strings, ou seja, em C não existe um operador de concatenação, existe uma função que faz isso.
    printf("%s\n", strcat(s1, s2));


    //strupr() e strlw são funções que jogam as letras pra maiúsculas e pra minúsculas... observe que em outras linguagens isso não mexe na string original, já em C, sim, mexe na string original.
    printf("%s\n", nome);
    printf("%s\n", strupr(nome));
    //printf("%c\n", strlw(nome));



}