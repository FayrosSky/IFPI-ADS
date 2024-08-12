import { question, questionInt } from "readline-sync";
function main(){
    const N = Number(question("Enter the quatity of fibbonaciś elements you want: "))
    let value1 = 0
    let value2 = 1
    let count = 1
    while(count <= N){        
        let next_value = value2 + value1
        value2 = value1
        value2 = value2 + value1
        console.log(`The elements in the sequence are: ${next_value}`)
        count++
    }
    
}
main()


//count++ vai ser a convergencia dos dados 
//Identificamos o while quando temos uma quantidade definida ou idefinida serve para tudo.
//Geralmente usamos o while quando ele 