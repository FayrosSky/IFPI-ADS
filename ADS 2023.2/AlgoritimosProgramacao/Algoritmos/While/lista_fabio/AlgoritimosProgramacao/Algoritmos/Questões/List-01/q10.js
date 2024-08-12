import {question} from "readline-sync"

function main(){
    //input
    const num1 = parseInt(question("Enter a number: "))
    const num2 = parseInt(question("Enter a second number: "))

    //Processing
    const quotient = Math.floor(num1 / num2)
    const remainder = num1 % num2  

    //Output
    console.log(`The quotient and the remainder when dividing ${num1} by ${num2} are respectively: ${quotient} and ${remainder}`)

}

main()