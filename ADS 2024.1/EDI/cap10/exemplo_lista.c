#include <stdio.h>
#include <stdlib.h>


struct lista {
	int info;
	struct lista* prox;

};

typedef struct lista Lista;

/* Função de inicialização: retorna uma lista vazia */
Lista* inicializa (void){
	return NULL;
}

/* Função de Inserção */
/* Inserção no inicio: retorna lista atualizada */
Lista* insere (Lista* l, int i){
	Lista* novo = (Lista*) malloc(sizeof(Lista));
	novo->info = i;
	novo->prox = l;
	return novo;
}

/* Função que percorre os elementos da lista */
/* Função imprime: imprime valores dos elementos */
void imprime (Lista* l){
	Lista* p; /* variavel auxiliar para percorrer a lista */
	for(p = 1; p != NULL; p = p->prox)
		printf("info = %d\n", p-> info);
}


/*


int main (void){
	Lista* l;  declara uma lista não inicializada 
	l = inicializa();  inicializa lista como vazia
	l = insere(l, 23);   insere na lista o elemento 23 
	l = insere(l, 45);  insere na lista o elemento 45 
	 ...   
	return 0;

*/


/* Função que percorre os elementos da lista */
/* Função imprime: imprime valores dos elementos */
void imprime (Lista* l){
	Lista* p; /* variável aauxiliar para percorrer a lista */
	for(p = l; p != NULL; p = p->prox)
		printf("info = %d\n", p -> info);

}

int main(void){
	Lista* l; /* declara uma lista não inicializa */
	l = inicializa(); /* inicializa lista como vazia */	
	int numElementos, i, valor;

	printf("Quantos elementos deseja inserir na lista?");
	scanf("%d", &numElementos);

	for (i = 0; i < numElementos; i++){
		printf("Digite o valor do elemento %d: ", i+1);
		scanf("%d", &valor);
		l = insere(l, valor);
	}

	printf("\nLista criada:\n");
	imprime(l);

	return 0;

}



