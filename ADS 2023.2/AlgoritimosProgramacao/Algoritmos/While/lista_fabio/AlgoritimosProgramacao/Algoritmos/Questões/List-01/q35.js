import {question} from "readline-sync"
function main(){
    //Input
    const num = parseInt(question("Enter a 4 digits number: ")) 

    //Processing
    const first_number = Math.floor(num / 1000) 
    const second_number = Math.floor((num % 1000)/100)
    const third_number = Math.floor((((num % 1000) % 100))/10)
    const fourth_number = ((num % 1000) % 100) % 10

    const sum_result = first_number + second_number + third_number + fourth_number

    //Output
    console.log(`The result of the sum between the number of ${num} (${first_number}, ${second_number}, ${third_number} e ${fourth_number}) is equal to: ${result_sum}`)

}

main()