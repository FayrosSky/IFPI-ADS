#ifndef PILHA_H
#define PILHA_H

//estrutura para o nó
typedef struct No{
    int valor;
    struct No* proximo;
} No;

//estrutura para a pilha
typedef struct Pilha {
    No* topo;
    int tamanho_atual;
    int tamanho_maximo;
} Pilha;

#endif