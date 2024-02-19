import {question} from "readline-sync"
import { get_positive_number } from "../../utils/input"
function main(){
    const num = Number(question("Choose the multiplication table number: "))
    const result = multiplication_table(num)  
    console.log(`The multiplication table of the chosen number(${num}): `)

}
function multiplication_table(number, type){
    if (type === 'SUM'){

    }
}

function sum_table(number){
    let portion = 1
    console.log('-- SUM --')
    console.log('---------')

    while(portion <= 10){ 
        let portion = number + portion
        console.log(`${number} + ${portion} = ${sum}`)
        portion++
    }    
}

function subtraction_table(number){
    minueno = number
    console.log("-- SUBTRACTION --")
    console.log("-----------------")
    while(minueno <= (number + 9)){
        const difference = minueno - number
        console.log(`${minueno} - ${number} = ${difference}`)
        minueno++
    }
}

function multiplaction_table(number){
   let factor = 1
   console.log("-- MULTIPLY --")
   console.log("--------------") 

   while(factor <= 10){
    const product = number * factor
    console.log(`${number} * ${factor} = ${product}`)
   }
}

function division_table(number){
    let dividend = number
    console.log("-- DIVISION --")
    console.log("--------------")

    while (dividend <= (10 * number)){
        const quotient = dividend / number
        console.log(`${dividend} ÷ ${number} = ${quotient}`)
        dividend = dividend + number
    }
}
main()