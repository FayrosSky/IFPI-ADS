import { question } from "readline-sync"

function main(){
    let nome = question('Digite um nome: ') //Estado inicial
    let menor_nome = nome
    let contador = 1

    while(nome.length !== 7){
        nome = question('Digite um nome: ') //Bom exemplo de escopo local e escopo global.Estamos só mudando o valor do nome, pois ele só vale uma volta
        contador++

        if(nome.length < menor_nome.length){
            menor_nome = nome
        }
    }
   console.log(`Vc digitou ${contador}`) 
   console.log(`O menor nome: ${menor_nome}`) 
}
main()