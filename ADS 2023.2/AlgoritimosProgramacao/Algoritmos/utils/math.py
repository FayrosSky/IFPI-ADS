export function fatorial(number){
    let fat = 1


    while(number > 1){
        fat = fat * number
        number--
    }

    return fat
}

export function fatorial_recursivo(number){ //caso simples
    if(number === 0 || number === 1){
        return 1
    }

}

//Recursividade é muito usada em estruturas de dados não-lineares, como árvore binárias em que um árvore chama suas filhas e suas filhas chama suas filhas da mesma forma. E as olimíadas de programação um dos requisitos é recursividade.

export function print_tabuada(number, type){
    if (tipo === 'SOMAR'){

    }else if (tipo === 'MULTIPLICAR'){

    }else if(tipo === 'DIVIDIR'){

    }else{
        print('Tipo inválido')
    }
}