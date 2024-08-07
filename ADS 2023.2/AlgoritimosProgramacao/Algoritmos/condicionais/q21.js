import { question } from "readline-sync";
function main(){
    //Input

    const num1 = Number(question("Enter a number value: "))
    const num2 = Number(question("Enter a second number value: "))

    //Processing

    const division_value = num1 / num2
    const rounded_division_value1 = division_value.toFixed(1)
    const rounded_division_value2 = division_value.toFixed(0)
    const remainder = rounded_division_value1 - rounded_division_value2

    if(remainder >= 0.5){
        const rounded_division_value2 = rounded_division_value2 + 1
        console.log(`The rounded value of the division between {num1} and {num2} is equal to: {rounded_division_value2}`)
    }
    else{
        console.log(`The rounded value of the division between {num1} and {num2} is equal to: {rounded_division_value2}`)
    }

    //Output
}