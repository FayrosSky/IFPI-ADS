import { question } from "readline-sync";
import { print } from "../../utils/input.js";

function main(){
    const num = Number(question("Enter a number: "))
    let count = 1
    let sum = 1

    while (count <= num){
        sum *= count
        count++
    }
    print(`The factorial of the entered number is: ${sum}`)

}
main()