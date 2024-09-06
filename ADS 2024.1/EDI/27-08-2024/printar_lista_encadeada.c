#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
    int info;               // Informação armazenada no nó
    struct Node* prox;      // Ponteiro para o próximo nó
} Node;


//função recursiva para mostrar a lista
void mostrar_list_rec(Node* lista){
    if (lista == NULL){
        return; //Caso base: lista vazia
    }
    mostrar_list_rec(lista->prox); //chama a função recursivamente para o próximo nó
    printf("%d\n", lista->info); // Imprime a informação do nó atual
}

//Função Principal
int main(){
    // Criação de nós
    Node* primeiro = (Node*)malloc(sizeof(Node));
    Node* segundo = (Node*)malloc(sizeof(Node));
    Node* terceiro = (Node*)malloc(sizeof(Node));

    //Atribuição de valores e ligações
    primeiro->info = 1;
    primeiro->prox = segundo; 

    segundo->info = 2;
    segundo->prox = terceiro;


    terceiro-> info = 3;
    terceiro->prox = NULL; //Último nó aponta para NULL 

    //Mostrar a lista encadeada
    mostrar_list_rec(primeiro);
    printf("Elementos da lista encadeada:\n");

    //liberação de memória
    free(primeiro);
    free(segundo);
    free(terceiro);   

    return 0;

}