import { question } from "readline-sync";
function main(){
    //Input
    const hours = parseInt(question("Enter a value in hours: "))

    //Processing
    const value_week = Math.floor(hours / 168)
    const value_day = Math.floor((hours % 168) / 24)
    const value_hour = (hours % 168) % 24  

    //Output

    console.log(`The entered value in hours converted to weeks, days and hours is equal to: ${value_week} week(s), ${value_day} day(s) and ${value_hour} hour(s)`)
}
main()
