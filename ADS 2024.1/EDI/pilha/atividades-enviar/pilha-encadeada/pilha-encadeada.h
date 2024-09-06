#ifndef PILHA_ENCADEADA_H
#define PILHA_ENCADEADA_H

// Estrutura para o nó da pilha
typedef struct No {
    int valor;
    struct No* proximo;
} No;

// Estrutura para a pilha
typedef struct Pilha {
    No* topo;
    int tamanho_atual;
    int tamanho_maximo;
} Pilha;

// Funções da pilha
Pilha* criar_pilha(int tamanho_maximo);
int esta_vazia(Pilha* pilha);
int esta_cheia(Pilha* pilha);
void empilhar(Pilha* pilha, int valor);
int desempilhar(Pilha* pilha);
void mostrar(Pilha* pilha);
void liberar_pilha(Pilha* pilha);

#endif // PILHA_ENCADEADA_H