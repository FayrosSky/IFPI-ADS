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
    empilhar(pilha, 60); //tentativa de add à pilha cheia
    mostrar(pilha);

    liberar_pilha(pilha);
    
    return 0;



}