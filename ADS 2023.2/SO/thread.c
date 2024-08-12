#include <unistd.h>

#define THREADS 40 //quantas threads quero ter

long compartilhada = 0; //memoria compartilhada

//funcao que vai executar em paralelo
void *threadFunc(void * arg)
{
    int a, b;
    for(long j = 0; j < 100000; j++) {
        a = compartilhada;
        b = 1;
        compartilhada = a + b; //incrementando 1 (condição de corrida) 
    }
}