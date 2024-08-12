import { question } from "readline-sync";
function main(){
    //Input

    const A = parseInt(question("Enter a positive integer: "))
    const B = parseInt(question("Enter another positive integer: "))
    const C = parseInt(question("Enter another positive integer: "))

    //Processing

    const R = (A + B)**2
    const S = (B + C)**2
    const D = (R + S)/2 

    //Output
    console.log(`The value of R, S and D are respectively to equal: ${R}, ${S} and ${D} `)
}
main()