import { question } from "readline-sync";
function main(){
    //Entrada
    const num = parseInt(question("Enter a number with 3 digits: "))

    //Processamento
    const hundreds = Math.floor(num / 100)
    const dozens = Math.floor((num % 100) / 10)
    const units = (num % 100) % 10
    const sum = hundreds + dozens + units 

    //Saída
    console.log(`The sum of H + D + U is equal to: ${sum}`)

}

main()