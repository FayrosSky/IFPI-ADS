import { enter_to_continue, print } from "../utils/input.js"

function main(){

    const frase = 'feliz dia das maes!'

    let caractere = frase[8]
    
    print(frase)
    print(`Posição 8 temos -> ${caractere}`)
    
    mostrar_caractere(frase)







    function mostrar_caractere(frase){
        let index = 0
        let tamanho = frase.length

        while (index < tamanho){
            caractere = frase[index]
            print(`${index} -> ${caractere}`)

            index += 1
        }
    }

}
main()