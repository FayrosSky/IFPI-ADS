import { readFileSync } from 'fs'
import { enter_to_continue, get_number, get_positive_number, print } from '../utils/input.js'


function main(){
    const palavras = load_palavras()    
    let opcao = get_number(menu(palavras.length))

    while(opcao != 0){

        if(opcao == 1){
            mostrar_palavras_n_letras(palavras)
        }else if (opcao === 2){
            //Palavras que não contém letra 'e'
            mostrar_palavras_sem_letra_tal(palavras)
        }
    }


    
function load_palavras(){
    const arquivo = readFileSync('palavras.txt', 'utf-8')
    const palavras = arquivo.split('\n')

    return palavras
}    

function mostrar_palavras_n_letras(palavras){
    const tamanho= get_positive_number('Tamanho+: ')
    let contador = 0
    for (let palavra of palavras){
        if(palavra.length > tamanho){
            contador ++
            print(palavra)
        }
    }
}


function mostrar_palavras_sem_letra_tal(palavras){
    const letter = get_text('Letra: ')
    let contador = 0
    for (let palavra of palavras){
        if (has_no_letter(palavra, letter)){
            contador++
            print(palavra)
        }
    }
}


function menu(qtd_palavras){
    return `
    '********** WORDPLAY **********'
    ${qtd_palavras} palavras carregadas
    -----------------------------------
    1 - Palavras com mais de N letras
    2 - Plavras sem letra "tal"
    3 - Palavras sem letras proibidas
    ...
    6 - Palavras abcedarian
    0 - Sair
    >>>
    `
}

}
main()