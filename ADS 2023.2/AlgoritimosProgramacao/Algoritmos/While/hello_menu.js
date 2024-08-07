import {get_number_min, print} from "../utils/input.js"
import { get_positive_number} from "../utils/input.js"
import { is_prime } from "../utils/math.js"
function main(){
    let numero = get_positive_number('Número: ')
    const menu = `
    |----- MAGIC NUMBER ------|
    1 - Info
    2 - Monstrar  Divisores
    3 - Mostrar N Múltiplos
    4 - Mudar o Magic Number

    0 - Sair
    Opção >>`
    let opcao = get_number_min(menu, 0)

    while(opcao !== 0){
        if(opcao === 1){
            mostrar_informacao(1)
        }else if(opcao === 2){
            show_multiples()
        }else if (opcao === 3){
            show_dividers()
        }else if(opcao === 4){
            numero = get_positive_number('Novo Magic Number: ')
        }else{
            print('Opcao Invalida!')
        }
    }

    enter_to_continue()
    opcao = get_number_min(menu, 0)


function mostrar_info(numero){
    // Operarador terário "Question ? True : False (faz uma pergunta e retorna verdadeiro ou falso)"
    const par_impar = numero % 2 === 0 ? 'PAR' : 'ÍMPAR'                                        //nosso operador ternário funciona como if, true e false
    const prime = is_prime(numero) ? 'É PRIMO' : ' NÃO É PRIMO'

    const info = `
    \---> Magic NUmber: ${numero}`
}

function show_multiples(number){
    let count = 0
    let count_multiplies = get_number_min('Quantos múltiplos?', 1)
    let actual = 0

    while (count < count_multiplies){
        print(`> ${actual}`)
        actual += number
        count++

        print('--------------------------------------------------')
    }
}

}
main()