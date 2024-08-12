import { question } from "readline-sync";
function main(){
    //Input
    const total_days = parseInt(question("Enter the age in days: "));

    //Processing

    const years = Math.floor(total_days / 365)
    const months = Math.floor((total_days % 365)/30)
    const days = ((total_days % 365) % 30)

    //Output    
    console.log(`The entered value of the days converted in years, months and days is equal: ${years} years, ${months} mes and ${days} days`)

}
main()