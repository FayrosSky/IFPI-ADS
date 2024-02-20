import { question } from "readline-sync";
function main(){
    //Input

    const num1 = parseInt(question("Enter the value of the numerator of the first fraction: "))
    const num2 = parseInt(question("Enter the value of the numerator of the second fraction "))

    const den1 = parseInt(question("Enter the value of the denominator of the first fraction: ")) 
    const den2 = parseInt(question("Enter the value of the denominator of the second fraction:  "))

    //Processing

    const sum_fraction = (((num1 * den2) + (num2 * den1))/(den1 * den2)).toFixed(2)

    //Output
    console.log(`The value of the sum of the entered fractions is equal to: ${sum_fraction}`)

}
main()