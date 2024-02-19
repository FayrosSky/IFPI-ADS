import { question } from "readline-sync";
function main(){
    //Input
    const num = (question("Enter a number with 3 digits: "))

    //Processing
    let hundreds = Math.floor(num / 100)
    let dozens = Math.floor((num % 100)/10)
    let units = (num % 100) % 10

    //Output
    console.log(`The entered number ${num} in reverse order is: ${units}${dozens}${hundreds}`)
}
    

main()