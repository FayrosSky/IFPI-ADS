import {question} from 'readline-sync';
function main(){

    console.log("Digite um apção: \n 0 - Sair \n 1 - somar \n 2 - subtrair \n 3 - multiplicar \n 4 - dividir");
    let valor_digitado = -1;
    let num1 = Number(question("Digite o número que vc quer receber a tabuada correspondente: "));

    while(valor_digitado > 4 || valor_digitado < 0){
    Number(question(''));

    if(valor_digitado == 0){
        soma(num1)
    }else if(valor_digitado == 1){

    }else if(valor_digitado == 2){

    }else if(valor_digitado == 3){
    
    }else{
    
    }

    }
    
    

}
main()