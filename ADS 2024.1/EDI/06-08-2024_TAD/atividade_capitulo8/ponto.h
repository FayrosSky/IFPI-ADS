#ifndef PONTO_H;
#define PONTO_H

typedef struct 
{
    float x;
    float y;
} Ponto;

Ponto* criar_ponto(Ponto* ponto, float deltaX, float deltaY);
void imprimir_ponto(const Ponto* ponto);
void liberar_ponto(Ponto* ponto);
float calcular_distancia(const Ponto* ponto1, const Ponto* ponto2);


#endif