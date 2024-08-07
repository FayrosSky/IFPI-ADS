import {question} from 'readline-sync';

function main(){
    let numero = Number(question("Digite um valor: "));
    let resultado_final = fatorial(numero)





    function fatorial(num){
        let resultado = 1;
        for(let i = 0; i < num - 1; i++){
            resultado *= (num - i);
        }
        return resultado;
    }

    console.log("O fatorial de " + numero + " é: " + resultado_final);
}
main()