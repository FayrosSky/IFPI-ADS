#include <stdio.h>
#include <stdlib.h>

int main()
{
    int var = 15;
    int *ptr;

    ptr = &var;

    printf("Conteúdo de var: %d\n", var);
    printf("Endereço de var: %p\n", &var);
    printf("Conteúdo apontado por ptr: %d\n", *ptr);
    printf("Endereço apontado por ptr: %p\n", ptr);
    printf("endereco do ptr          : %p\n", &ptr);


    *ptr = 73;

    printf("\n\n");
    printf("Conteúdo de var: %d\n", var);
    printf("Endereço de var: %p\n", &var);
    printf("Conteúdo apontado por ptr: %d\n", *ptr);
    printf("Endereço apontado por ptr: %p\n", ptr);
    printf("endereco do ptr          : %p\n", &ptr);

    return 0;
}

// Ponteiros:
// *ptr : o apontado por, conteúdo do endereço da variável que ptr aponta
// ptr  : o endereço da variável
// &ptr : o endereço do ponteiro ptr