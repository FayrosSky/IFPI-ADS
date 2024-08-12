import { question } from "readline-sync";
function main(){
    //Input
    let dollar_real = parseFloat(question("Enter the dollar value converted in real:"))
    let dollar_value = parseInt(question("Enter the quantity of dollars: "))

    //Processing
    let total_value_dollar = dollar_real * dollar_value

    //Output
    console.log(`The total of the ${dollar_value} dollars converted to real is: ${total_value_dollar}$`)
}
main()