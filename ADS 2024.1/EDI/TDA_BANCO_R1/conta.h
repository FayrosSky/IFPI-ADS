#ifndef CONTA_H
#define CONTA_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char nome[50];
    float renda;
    char CPF[12];
    char endereco[100];
    char chavePIX[20];
} Titular;

typedef struct {
    char numero[10];
    float saldo;
    Titular titular;
} Conta;

void CriarConta(Conta *conta, Titular titular);
void Depositar(Conta *conta, float valor);
void Sacar(Conta *conta, float valor);
void RealizarPIX(Conta *conta, float valor, char chavePIX[]);
void ConsultarSaldo(Conta *conta);
void ConsultarChavePIX(Conta *conta);
void GerarExtrato(Conta *conta);

#endif