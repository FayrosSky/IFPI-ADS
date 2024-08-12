import { question } from "readline-sync";
function main(){
    //Input
    const num = parseInt(question("Enter a 3 digits number: "))

    //Processing
    const first_number = Math.floor(num / 100)
    const second_number = Math.floor((num % 100) / 10)
    const third_number = (num % 100) % 10

    const inverse_number = first_number + second_number * 10 + third_number * 100

    const subtraction_result = num - inverse_number 

    //Output
    console.log(`The result of the sum between the entered number ${num} and its inverse ${inverse_number} is equal to: ${subtraction_result}`)

}

main()