#include <stdio.h>
void calcular_operacoes(int valor1, int valor2, int *soma, int *subtracao, int *multiplicacao, int *divisao){
    *soma = valor1 + valor2; //o contéudo desse endereço soma declarado em calcular_operacoes ele vai botar valor_2 e valor_2.
    *subtracao = valor1 - valor2;
    *multiplicacao = valor1 * valor2;
    *divisao = valor1 / valor2;
};

int main(){ //poder ser void main também que não dá erro
    int valor1, valor2, soma, subtracao, divisao, multiplicacao;

    printf("Digite dois valores: ");
    scanf("%d %d", &valor1, &valor2); // &valor1 : endereço de num1, &valor2: endereço de num2

    calcular_operacoes(valor1, valor2, &soma, &subtracao, &multiplicacao, &divisao); //com &soma mandamos 
    //printf("Soma: %d, subtracao: %d, multiplicacao: %d, divisao: %d\n", soma, subtracao, multiplicacao, divisao);
    //printf("%d + %d \n", &soma);
    //printf("%d - %d \n", &subtracao);
    //printf("%d x %d \n", &multiplicacao);
    //printf("%d / %d \n", &divisao);

    return 0;
}