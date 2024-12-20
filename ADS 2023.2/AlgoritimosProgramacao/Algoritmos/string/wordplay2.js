import { question } from 'readline-sync'
import { readFileSync } from 'fs'
import { print } from "../utils/input.js"
import { contem_letra, text_to_lower } from "../utils/strings.js"


function main(){

    const palavras = load_palavras_do_arquivo()
    const qtd = palavras.length
    console.log(`${qtd} palavras carregadas`)

    const menu = `
    ***** WordPlay 2 *****
    1 - Palavras com mais de N letras
    2 - Palavras sem a letra "qualquer"
    3 - Palavras sem letras proibidas
    4 - Palavras com letras obrigatórias
    0 - Sair
    >>> `

    let opcao = Number(question(menu))

    while(opcao !== 0){
        if(opcao === 1){
            const palavras_filtradas = palavras_com_mais_de_n_letras(palavras)
            mostrar_palavras(palavras_filtradas, 'Palavras Tam Mínimo', qtd)
        }else if(opcao === 2){
            const palavras_filtradas = filtra_palavras_sem_letra_e(palavras)
            mostrar_palavras(palavras_filtradas, 'Palavras sem letra "e"', qtd)
        }else if(opcao === 3){
            const palavras_filtradas = filtra_palavras_sem_letras_proibidas(palavras)
            mostrar_palavras(palavras_filtradas, 'Palavras sem letras proibidas', qtd)
        }else if(opcao === 4){
            const palavras_filtradas = filtra_palavras_com_letras_proibidas(palavras)
            mostrar_palavras(palavras_filtradas, 'Palavras com Letras obrigatórias', qtd)
        }else if(opcao === 5){
            const palavras_filtradas = uses_all(palavra, letras_obrigatorias){

            }
        }else if(opcao === 6){

        }   
    }

    //ir para próxima volta
    question('Enter....')
    console.clear()
    opcao = Number(question(menu))

}

function load_palavras_do_arquivo(){    
    const conteudo = readFileSync('palavras.txt', 'utf-8')
    const linhas = conteudo.split('\n')
    return linhas
}

function palavras_com_mais_de_n_letras(palavras){
    const cestinha = []

    const menu = `
        Digite 1 para 0 letras ou mais
        Digite 2 para informar tamanho
    >>> `
    const opcao= Number(question(menu))
    let limite = 20
    if (opcao === 2){
        limite = Number(question('Limite N: '))
    }


    for (let item of palavras){
        if (item.length > limite){
            cestinha.push(item)
        }
    }

    return cestinha
}

function mostrar_palavras(palavras, label, total_palavras){
    console.log(label)
    console.log('------------------')
    for (let p of palavras){
        console.log(p)
    }
    console.log('------------------')
    const percentual = (palavras.length / total_palavras) * 100
    console.log(`Quantidade: ${palavras.length}`)
    console.log(`Percentual: ${percentual.toFixed(3)}%`)
}

function filtra_palavras_sem_letra_e(cesta_palavras){
    const cestinha = []
    const letra_proibida = question('Letra a evitar: ')
    for (let item of cesta_palavras){
        if (has_no_letter(item, letra_proibida) === true){
            cestinha.push(item)
        }
    }

    return cestinha
}

function filtra_palavras_sem_letras_proibidas(palavras){
    const letras_proibidas = question('Letras proibidas: ')
    const cestinha = []
    for (let item of palavras){
        if (avoids(item, letras_proibidas)){
            cestinha.push(item)
        }
    }
}

function avoids(palavras, letras_proibidas){
    for (let letra of letras_proibidas)
        if(has_letter(palavras, letra)){
            return false
        }
}

function has_letter(Palavras, letra_procurada){
    for (let letra of text_to_lower(palavras)){
        if(letra === text_to_lower(palavras)){
            return true
        }
    }

    return false
}


function has_no_letter(palavra, letra_proibida){
    const palavra_minusculo = text_to_lower(palavra)
    for (let letra of palavra_minusculo){
        if (letra === text_to_lower(letra_proibida)){
            return false
        }
    }

    return true
}

function uses_all(palavra, letras_obrigatorias){
    for(let letras_obrigatoria of letras_obrigatorias){
        if(!has_letter(palavra, letras_obrigatoria)){
            return false
        }
    }

    return true
}

function use_only(palavra, letras){
    palavra = text_to_lower(palavra)
    letras = text_to_lower(letras)

    for (let i = 0; i < palavra.length; i++){
        if(letras.indexOf(word[i]) === -1){
            return false;
        }
    }

    return true
}

main()





