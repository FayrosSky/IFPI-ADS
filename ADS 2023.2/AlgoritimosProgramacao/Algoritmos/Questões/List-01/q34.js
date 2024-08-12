import { question } from "readline-sync";
function main(){
    
    //Input
    const num1 = parseInt(question("Enter a number: "))
    const num2 = parseInt(question("Enter a second number: "))
    const num3 = parseInt(question("Enter a third number: "))

    //Processing
    const average = (num1 + num2 + num3)/3

    //Output
    console.log(`The average between the numbers ${num1}, ${num2}, ${num3} is equal to: ${average}`)
    
}
main()