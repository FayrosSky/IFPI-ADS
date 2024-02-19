import { question } from "readline-sync";
function main(){
    //Input

    const minutes = parseInt(question("Enter a value in minutes: "))

    //Processing

    const value_days = Math.floor(minutes / 1440)
    const value_hours = Math.floor((minutes % 1440) / 60)
    const value_minutes = ((minutes % 1440) % 60)

    //Output
    console.log(`The entered value of ${minutes} minutes converted to days, hours and minutes is equal to: ${value_days} days, ${value_hours} hours and ${value_minutes} minutes`)



}
main()