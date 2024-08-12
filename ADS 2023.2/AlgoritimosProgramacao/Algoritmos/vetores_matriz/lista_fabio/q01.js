import {print} from '../../utils/input.js'
import { question } from 'readline-sync'

function main(){

    const n = question("Quantos elementos terá o vetor?")
    const vetor_digitado = criar_vetor(n)

    print(`Vetor digitado pelo usuário: ${ vetor_digitado}`)

    const vetor_invertido = inverte_vetor(vetor_digitado)

function criar_vetor(n){
    const vetor = new Array(n)

    for (let i = 0; i < n; i++){
        const elemento = question(`Digite o elemento ${i + 1} do vetor:`)
        vetor.push(elemento)
    }

    return vetor
}


function inverter_vetor(vetor_digitado){
    let vetor_a_inverter = []
    let index = length(vetor_digitado)

    for(let elemento of vetor_digitado){

    }

}


}

main()