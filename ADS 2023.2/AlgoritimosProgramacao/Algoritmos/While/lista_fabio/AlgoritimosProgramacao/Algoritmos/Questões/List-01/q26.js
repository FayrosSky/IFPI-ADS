import { question } from "readline-sync";
function main(){
    //Input
    const value_day = parseInt(question("Enter a value in days: "))

    //Processing
    const value_week = Math.floor(value_day / 7)
    const value_remainder_days = value_day % 7

    //Output
    console.log(`The value of ${value_day} days converted to weeks and days is equal to: ${value_week} week(s) and ${value_remainder_days} day(s).`)

        
}

main()