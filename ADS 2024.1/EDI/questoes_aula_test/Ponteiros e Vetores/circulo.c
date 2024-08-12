#include <stdio.h>

void calcular_Circulo(float r, float *circunferencia, float *area){ //declara os ponteiros //*circunferencia e *area não trazem valores, mas sim levam, ajudam a levar valores.
    *circunferencia = (2 * 3.14 * r); // *circumferencia (o conteúdo de circunferencia recebe o valor de 2 * 3.14 * r);
    *area = 3.14 * r * r; //o tipo da variavel de area é ponteiros de float... o que *area pode receber não é um valor seco(PI * r * r), mas sim um endereço de float. Para onde area aponta, coloque(PI * r * r)



}


int main()
{

    float r, circunferencia, area; //declara o valor final.
    //float* pcirc;
    //pcirc = &circ;
    printf("Digite o valor do raio: ");
    scanf("%f", &r);

    calcular_Circulo(r, &circunferencia, &area); //ou poderiamos passar pcirc que já é uma variável que armazena o endereço //declara os endereços //&circunferencia e &area são os endereços do ponteiro de float: circunferência e area

    printf("O que valor da área e o valor da circunferência são, respectivamente: %2.f  e %2.f\n", area, circunferencia);


    return (0);
}