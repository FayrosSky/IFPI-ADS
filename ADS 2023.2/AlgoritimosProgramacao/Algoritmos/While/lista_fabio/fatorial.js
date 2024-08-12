import {question} from "readline-sync";
import 


function main(){
    let num = Number(question("Enter a number: "))
    const result = calculate_factorial(num)
    console.log(`The result of the factorial of the number ${result}`)
}

function calculate_factorial(number){
    if(number < 0){
        return "Negatives numbers don't have a factorial"
    }else if(number === 0 || number === 1){
        return 1
    }else{
        let factorial = 1
        while(number > 1){
            factorial *= number
            number--
        }
        return factorial
    }
}

main()
// ../ >> subir um nível aqui dentro do código na hora de importar a função.
//Uma função recursiva  tem a mesma estrutura do while: Estado inicial, condição de continuidade e trabalho e convergência de dados.