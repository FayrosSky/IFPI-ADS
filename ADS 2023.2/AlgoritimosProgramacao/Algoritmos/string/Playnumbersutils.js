import { print } from "../utils/input";


export function preencher_manualmente(vetor){
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = int(print(`Digite o valor para a posição ${i}: `))
    }
}
