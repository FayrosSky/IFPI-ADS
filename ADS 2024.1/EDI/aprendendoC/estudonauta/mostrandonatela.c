#include <stdio.h> //Diretiva de pré-processamento
#include <locale.h>


void main(){
    printf("Oi, tudo bem?\n");
    printf("Oi, \tudo bem?\n");
    printf("Oi, tudo \rbem?\n");
    printf("Oi, \\tudo bem?\n");
    printf("Oi, \"tudo bem?\"\n");
    printf("Oi, \?Tudo bom?\n");
    printf("Oi, \atudo bem?\n");
    printf("Oi, \7tudo bem?\n");
    printf("Oi, \7tudo bem?%%\n");
    
    setlocale(LC_ALL, "Portuguese");
    printf("C é \n\"SUPER\" \nfácil!\n");


    // \n (nova linha)
    // \t (tabulação)
    // \b (backspace)
    // \r (retorno)
    // \\ (barra)
    // \" (aspas)
    // \? (interrogação)
    // \a  ou \7 (beep)
    // %% (porcentagem)
}   
    

