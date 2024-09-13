#include <stdio.h>
#include <string.h>


int main(){
    /*
    
    //queremos guardar letras, uma das formas é:
    char letra1 = 'M';
    char letra2 = 'E';
    char letra3 = 'L';
    char letra4 = 'A';
    char letra5 = 'N';
    char letra6 = 'C';
    char letra7 = 'I';
    char letra8 = 'A';

    printf("%c%c%c%c%c%c%c%c\n", letra1, letra2, letra3, letra4, letra5, letra6, letra7, letra8);
    //observe que essa forma de guardas letras é muito trabalhosa! Pra uma palavra deu todo esse trabalho.

    for(int i = 1; i <= 8; i++){
        printf("%c", letra(i));
    }
    //Observe que como essas variáveis estão isoladas, também não conseguimos fazer loops.

   */

    //observe que para isso vamos precisar da estrutura array(que é o monte de uma coisa em particular, como um monte de inteiros, monte de double e etc)

    /*
    
    int notas[10];
    
    notas[0] = 10; //obser que a posição do array é como se fosse uma "outra variável"
    notas[2] = 9;
    notas[3] = 8;
    notas[9] = 4;

    //agora, conseguimos colocar em um loop e deixar mais dinâmico o nosso código
    printf("notas %d %d %d\n", notas[0], notas[2], notas[9]);
   
    */

   char palavrasecreta[20];
   
   /*

   palavrasecreta[0] = 'M';
   palavrasecreta[1] = 'E';
   palavrasecreta[2] = 'L';
   palavrasecreta[3] = 'A';
   palavrasecreta[4] = 'N';
   palavrasecreta[5] = 'C';
   palavrasecreta[6] = 'I';
   palavrasecreta[7] = 'A';
   palavrasecreta[8] = '/0'; //nosso último caractere para o sprintf saber onde parar


   printf("%c%c%c%c%c%c%c", palavrasecreta[0], palavrasecreta[1], palavrasecreta[2], palavrasecreta[3], palavrasecreta[4], palavrasecreta[5], palavrasecreta[6], palavrasecreta[7]);

   //Observe que ainda está difícil de usar, mesmo usando array 
}
   // Assim, para resolver esse problema, temos a função sprintf(arraydeclarado, "PALAVRA QUE QUEREMOS PASSAR");
*/   
   //Agora, iremos fazer nosso jogo 

   sprintf(palavrasecreta, "MELANCIA");  
   //printf(" %s\n", palavrasecreta);
   
   int acertou = 0;
   int enforcou = 1;

   /*
   
   
   printf("%d %d\n", acertou, !acertou); //saída: 0 1 

   acertou = 1;
   printf("%d %d\n", acertou, !acertou); //saída: 1 0
   
   
   */
   
   do {
       char chute;
       scanf(" %c", &chute);

       for(int i = 0; i < strlen(palavrasecreta); i++){
           if(palavrasecreta[i] == chute) {
                printf("A posição %d tem essa letra!\n", i);
           }
       } 


   } while(!acertou && !enforcou);

   

   // while(acertou == 0 && enforcou == 0) nesse caso a condição ia ser verdadeira desde o começo

   //diferença do while e do do while... no caso do while, ele verifica a condição e então realiza o bloco de código, ou seja, há a possibilidade dele nem executar uma vez o bloco de código. Já o do while é contrário, pois ele primeiro realiza o bloco de código e só depois verifica a condição, ou seja, ele realiza o bloco de código ao menos uma vez. Observamos que às vezes o while e do while eles têm o mesmo efeito, nesse caso em particular também, mas colocamos o do while pra explicitar que o bloco de código vai ser executado pelo menos uma vez, já que se tratando do jogo de forca, tem que ser executado ao menos uma vez.

   
   
   
   
   
   
   
   
}  
