import { question } from "readline-sync";
//Input 
    const num1 = parseInt(question("Enter a number value: "))
    const num2 =  parseInt(question("Enter a second number value: "))

//Processing
    const sum = num1 + num2
    const subtraction = num1 - num2 
    const result = sum / subtraction

//Output
    console.log(`The result of the sum of {num1} and {num2} by subtraction of ${num1} and ${num2} is: ${result} `)