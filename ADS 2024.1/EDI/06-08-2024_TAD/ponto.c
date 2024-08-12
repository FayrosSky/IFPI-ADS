//esse arquivo é um arquivo de implementação, aqui que a lógica está.
#include <stdio.h>
#include "ponto.h"
#include <math.h>


Ponto criarPonto(float x, float y) {
    Ponto p;
    p.x = x;
    p.y = y;
    return p;
}


float calcularDistancia(Ponto p1, Ponto p2){
    float dx = p2.x - p1.x;
    float dy = p2.y - p1.y;
    return sqrt(dx * dx + dy * dy);
}

void imprimirPonto(Ponto p) {
    printf("{%.2f, %.2f}\n", p.x, p.y);
}