import { question } from "readline-sync";
function main(){
    //Input
    const num = question("Enter a 3 digit number: ")

    //Processing

    const first_number = Math.floor(num / 100)
    const second_number = Math.floor((num % 100) / 10)
    const third_number = (num % 100) % 10

    const inverse_number = third_number * 100 + second_number * 10 + first_number

    const subtraction_result = num - inverse_number

    //Output
    console.log(`The result of the subtraction of the entered number (${num}) by its inverse (${inverse_number}) is equal to: ${subtraction_result}`)

}
main()