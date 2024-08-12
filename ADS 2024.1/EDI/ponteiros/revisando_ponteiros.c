#include <stdio.h>
#include <stdlib.h>

void display(int var, int *ptr);

int main(){

    int var = 15;
    int *ptr;

    ptr = &var;
    
    printf("conteudo de var = %d\n", var);
    printf("endereço de var = %p\n", &var);

    printf("Conteudo apontado por ptr = %d\n", *ptr);
    printf("Endereço apontado por ptr = %p\n", ptr);

    printf("endereco do ptr           = %p\n", &ptr);

    *ptr = 73;
    printf("\n\n");
    printf("conteudo de var = %d\n", var);
    printf("endereço de var = %p\n", &var);

    printf("Conteudo apontado por ptr = %d\n", *ptr);
    printf("Endereço apontado por ptr = %p\n", ptr);

    printf("endereco do ptr           = %p\n", &ptr);


    //ponteiros:
    //*ptr : o apontado por, conteúdo do endereço da variável que ptr aponta
    //ptr  : o endereço da variável
    //&ptr : o endereço do ponteiro



}