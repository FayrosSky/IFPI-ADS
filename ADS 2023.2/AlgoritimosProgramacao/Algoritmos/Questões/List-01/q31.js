import { question } from "readline-sync";
function main(){
    //Input
    const binary_value = parseInt(question("Enter a binary value of 4 digits: "))

    //Processing
    const first_digit = Math.floor(binary_value / 1000)  
    const second_digit = Math.floor((binary_value % 1000) / 100)
    const third_digit = Math.floor(((binary_value % 1000) % 100) / 10)
    const fourth_digit = ((binary_value % 1000) % 100) % 10   

    const decimal_value = (fourth_digit * (2 ** 0)) + (third_digit * (2 ** 1)) + (second_digit * (2 ** 2)) + (first_digit * (2 ** 3))

    //Output
    console.log(`The entered binary value of ${binary_value} bits converted to decimal base is equal to: ${decimal_value} `)
    

}
main()