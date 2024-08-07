#include <stdio.h>
#include <stdlib.h>

struct aluno{
   int idade;
   float renda; 
};


int main() {
    char menu[] = ">>> SysAlunos <<<\n1 - Add Aluno\n2 - Listar Alunos";
    int opcao;
    printf("%s", menu);
    scanf("%d", &opcao);

    while (opcao != 0){
        printf("%s", menu);
        scanf("%d", &opcao);

    }

}