#include <stdio.h>
//Devolver a média por referencia, ou seja, tem que receber o endereço de memória, ou seja, não vai ter retur, mas sim o enderecemento.
//aprovado 7 ou mais
void calcular_media( float p1, float p2, float p3, float *m, char *sit){ //entregando os ingredientes p1, p2, p3 para fazer bolo e pizza tão em determinado armários (endereços)  e, além disso, a forma do bolo e a forma da pizza e como se tivéssemos uma cordinha que pra puxar as pizzas prontas 
    *m = (p1 + p2 + p3) / 3; //conteúdo de para atribuir um conteúdo a onde esse endereço aponta
    //Descobrir e atualizar a situação
    if( *m >= 7 ){ //se o conteudo da media for maior que 7
        *sit = 'A'; //mudar o conteudo de onde esse endereço aponta
    }else if( *m > 4 && *m < 7){
        *sit = 'F'; //char só pode ser uma letra, e apenas uma
    }else{
        *sit = 'R';
    }
}

int main(){

    float valor1, valor2, valor3, media;
    char situacao; 
    printf("Digite 3 notas: ");
    scanf("%f %f %f", &valor1, &valor2, &valor3);

    calcular_media(valor1, valor2, valor3, &media, &situacao); //observe que não precosar passar os ponteiros, apenas os valores mesmo
    printf("Media = %1.f\n", media);

    printf("Sua situação é %c\n", situacao);


    return 0;
}
