//esse arquivo .h é um arquivo de especificação
#ifndef PONTO_H
#define PONTO_H

//Definição da estrutura ponto
typedef struct {
    float x;
    float y;    

} Ponto;

//Protótipos das funções
Ponto criarPonto(float x, float y);
float calcularDistancia(Ponto p1, Ponto p2);
void imprimirPonto(Ponto p);

#endif 
