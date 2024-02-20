import { question } from "readline-sync";

function main(){
    //Input

    const years = parseInt(question("Enter the age in years: "))
    const months = parseInt(question("Enter the age in months: "))
    const days = parseInt(question("Enter the age in days: "))

    //Processing

    const total_days = (years * 365 + months * 30 + days)

    //Output
    console.log(`The age entered converted to days is equal to: ${total_days}`)

}
main()