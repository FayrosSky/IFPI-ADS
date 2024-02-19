import { get_positive_number, get_text, print } from "../utils/input";

function main(){

    const qtd = get_positive_number("Quantos nomes: ")
    const cestinha = []


    //Ler os nomes
    for (let i = 1; i <= qtd; i++){ //observe que quando começarmos em i = 0, vamos até <, já quando começarmos em 1 vamos até <=
        // Pedir um nome
        const nome = get_text(`Nome ${i}: `)
        cestinha.push(nome)
    }

    //Analisar: Nomes de Tamanho par e ímpar
    let pares = 0
    let impares = 0
    for(let nome of cestinha){
       if(nome.length % 2 === 0){
         pares++
       }else{
         impares++ 
       } 
    }

    // Apresentar os resultados
    print(`
    ------ RESULTADO ------
    Nomes Digitados: ${cestinha.length}
    Nomes Tam Par  : ${pares}
    Nomes Tam Ímpar: ${impares}
    `)
}

main()