#include <stdio.h>

int main(){
    printf("Contaoe com FOR\n");
    int limite;
    printf("Digite um limite: ");
    scanf("%d", &limite);

    for (int i = 1; i <= limite; i++){
        printf("%d\n", i);

    }

    printf("Fim do Loop For\n");
    return 0;
}