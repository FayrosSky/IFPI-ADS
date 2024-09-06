#include <stdio.h>
#include "pilha.h"

//Função para criar uma nova pilha
Pilha* criar_pilha(int tamanho_maximo) {
    Pilha* pilha = (Pilha*)malloc(sizeof(Pilha));
    pilha->topo = NULL;
    pilha->tamanho_atual = 0;
    pilha->tamanho_maximo = tamanho_maximo;
    return pilha;

}


// Função para verificar se a pilha está vazia
int esta_vazia(Pilha* pilha) {
    return pilha->tamanho_atual == 0;
}

// Função para verificar se a pilha está cheia
int esta_cheia(Pilha *pilha) {
    return pilha->tamanho_atual == pilha->tamanho_maximo;
}

// Função para adicionar um elemto à pilha
void empilhar(Pilha* pilha, int valor) {
    if (esta_cheia(pilha)) {
        printf("Pilha cheia! Não é possível adicionar o valor %d.\n", valor);
        return;
    }

    No* novo_no = (No*)malloc(sizeof(No));
    novo_no->valor = valor;
    novo_no->proximo = pilha->topo;
    pilha->topo = novo_no;
    pilha->tamanho_atual++;
    printf("Valor %d adicionado à pilha.\n", valor);

}


//Função para remover um elemento da pilha
int desempilhar(Pilha* pilha){
    if (esta_vazia(pilha)){
        printf("Pilha vazia! Não é possível remover elementos.\n");
        return -1; //retorna -1 se a pilha estiver vazia
    }
    No* temp = pilha->topo;
    int valor_removido = temp->valor;
    pilha->topo = pilha->topo->proximo;
    free(temp);
    pilha->tamanho_atual--;
    printf("Valor %d removida da pilha.\n", valor_removido);
    return valor_removido;


} 

// Função para mostrar os elementos da pilha
void mostrar(Pilha* pilha) {
    if (esta_vazia(pilha)) {
        printf("A pilha está vazia.\n");
        return;
    }
    No* atual = pilha->topo;
    printf("Elementos da pilha: ");
    while (atual != NULL) {
        printf("%d ", atual->valor);
        atual = atual->proximo;
    }
    printf("\n");
}

// Função para liberar a memória da pilha
void liberar_pilha(Pilha* pilha) {
    while (!esta_vazia(pilha)) {
        desempilhar(pilha);
    }
    free(pilha);
}

// Função principal para demonstrar o funcionamento da pilha
int main() {
    Pilha* pilha = criar_pilha(5);

    empilhar(pilha, 10);
    empilhar(pilha, 20);
    empilhar(pilha, 30);
    mostrar(pilha);

    desempilhar(pilha);
    mostrar(pilha);

    empilhar(pilha, 40);
    empilhar(pilha, 50);
    empilhar(pilha, 60); // Tentativa de adicionar à pilha cheia
    mostrar(pilha);

    liberar_pilha(pilha);
    return 0;
}









