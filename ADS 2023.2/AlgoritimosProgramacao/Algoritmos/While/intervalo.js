import { question } from "readline-sync";
function main(){
    const limite_inferior = Number(question("Digite o limite inferior: "))
    const limite_superior = Number(question("Digite o limite superior: "))
    const multiplo = Number(question("Digite o múltiplo que vc quer: "))
    let numero = limite_inferior
    let contador = 0

    //while(limite_superior <= limite_inferior){
        //limite_superior = Number(question("Digite um valor do limite superior válido(maior que o limite inferior): "))
    //}

    while(numero <= limite_superior){
        if(numero % multiplo === 0){
            console.log(`${numero}`)
            contador++
        }
        numero++
        //contador++ // aqui vai contar todas as voltas do while
    }
    console.log(`A quantidade de multiplos entre ${contador}`)
}

function get_number(label, minimo){ //recebe uma frase que vai ser digitada pro usuário e um valor mínimo
    let numero = get_number(label)

    while (numero < minimo){
        console.log(`ERROR: Digite um numero maior ou igaul a ${minimo}`)
        numero = get_number(label)
    }
}
main()

//Label é o texto de explicação qeu passamos igual lá na web quando fazemos.