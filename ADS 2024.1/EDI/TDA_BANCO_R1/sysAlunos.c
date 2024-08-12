#include <stdio.h>
#include <stdlib.h>

int main(){

    int opcao;

    while(true){

    printf(">>> SysAluno <<<\n");
    printf("1 - Add alunos\n");
    printf("2 - Listar Alunos\n");
    printf("3 - Atualizar Aluno\n");
    printf("4 - Remover Aluno\n");
    printf("5 - Buscar Aluno por matrícula\n");
    printf("6 - Buscar Aluno por parte do nome\n");
    printf("\n\n");
    printf("0 - Sair\n");
    printf("\n");
    printf("Digite a opção desejada:\n");
    scanf("%d", &opcao);

    if(opcao < 0 || opcao > 5){
        printf("Opção inválida! Tente uma opção válida:\n");
        continue;
    }
        
    if(opcao == 0){
        break;
    }else if(opcao == 1){
        
    }else if(opcao == 2){

    }else if(opcao == 3){

    }else if(opcao == 4){

    }else if(opcao == 5){

    }else{

    }

    



    }










    return 0;
}