#include <stdio.h>
#include <unistd.h> // Para a função usleep
#include <string.h> // Para a função strlen

#define LARGURA_TERMINAL 40 // Largura do terminal (ajuste conforme necessário)

// Função para mover o carrinho
void moverCarrinho(int posicao) {
    // Desenho do carrinho
    const char *carrinho =
        "   ____\n"
        " _/_|__\\_\n"
        "|  _  _  |\n"
        " '-(_)---'\n";

    // Limpa a linha atual
    printf("\r%*s", LARGURA_TERMINAL, ""); // Preenche a linha com espaços
    // Move o carrinho para a nova posição
    printf("\r%*s", posicao, carrinho); // Coloca o carrinho na nova posição
    fflush(stdout); // Atualiza a saída imediatamente
}

int main() {
    int i;
    int largura_carrinho = 4; // Largura do carrinho em caracteres

    // Movimento do carrinho da esquerda para a direita
    for (i = 0; i <= LARGURA_TERMINAL - largura_carrinho; i++) {
        moverCarrinho(i);
        usleep(100000); // Espera 100 milissegundos (0.1 segundo)
    }

    // Movimento do carrinho da direita para a esquerda
    for (i = LARGURA_TERMINAL - largura_carrinho; i >= 0; i--) {
        moverCarrinho(i);
        usleep(100000); // Espera 100 milissegundos (0.1 segundo)
    }

    printf("\nCarrinho chegou ao destino!\n");
    return 0;
}