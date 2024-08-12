import { question } from "readline-sync";
function main(){
    //Input
    const months = parseInt(question("Enter a value in months: "))

    //Processing
    const value_years = Math.floor(months / 24)
    const value_months = months % 24

    //Output
    console.log(`The entered value in months of ${months} converted to years and months is equal to: ${value_years} years and ${value_months}`)

}
main()