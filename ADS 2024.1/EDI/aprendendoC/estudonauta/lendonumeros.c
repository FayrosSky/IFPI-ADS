#include <stdio.h>

/*
 pra ler não colocamos scanf(variavel), pois temos que acessar a variável, mas sim o endereço dessa variável. E em C sempre que queremos acessar o endereço de uma variável, colocamos um & na frente dela. 
*/



void main(){
    /*
    int num;
    float med;

    scanf("%f", &med);
    scanf("%d", &num); 
    */

   /*
   int n;
   float m;
   printf"Digite um numero inteiro: ");
   scanf("%d", &n);
   printf("Digite um numero real:");
   scanf("%f", &m);
   printf("Você acabou de digitar o valor %d e %.1f. Muito obrigado\n!", n, m);
   */

  char r;
  char s;

  printf("Digite so uma letra: ");
  fflush(stdin); //usado para limpar o buffer de entrada
  scanf(" %c", &r); //o espaço dado antes do %c ignora os espaços em branco, incluindo o \n
  printf("Digite outra letra: ");
  fflush(stdin);
  scanf(" %c", &s);
  printf("Voce digitou a letra: \"%c\" e a letra \"%c\" \n", r, s);



  /*
    observe que nesse código, ele nem deixa a gente ler a outra letra. O que acontece é que o valor da primeira letra + enter não cabe no espaço de um único caractere, então acaba sobrando um buffer para a próxima variável. A linguagem C tem esse problema e os compiladores tem esse problema. Assim, antes de qualquer scanf é bom limparmos esse buffe com o comando fflush(stdio) stdin é a entrada padrão(o teclado)
  */


  //Outra forma de ler caracteres é usando o getchar()
  char rr;
  char ss;
  
  printf("Digite so uma letra para testa o getchar:\n");
  fflush(stdin);
  rr = getchar();
  printf("Digite outra letra para testa o getchar:\n");
  fflush(stdin);
  ss = getchar();
  printf("Voce digitou as letras \"%c\" e \"%c\"\n", rr, ss);

  //Lendo strings
  char nome[30];
  printf("Digite o seu nome:\n");
  fflush(stdin);
  scanf("%s", nome); //pra ler strings não usamos o &
  printf("Você digitou \"%s\"\n", nome); //Observe que se passamos espaços, ele corta no primeiro espaço esse problema podemos solucionar com o comando gets.

  //testando o gets()
  char name[30];
  char ender[40];
  printf("Digite o seu nome usando o gets():\n");
  fflush(stdin);
  fgets(name, sizeof(name), stdin);
  printf("Seu endereço: \n");
  fflush(stdin);
  fgets(ender, sizeof(ender), stdin);
  printf("Você digitou \"%s\" que mora em \"%s\"", name, ender);

  








}