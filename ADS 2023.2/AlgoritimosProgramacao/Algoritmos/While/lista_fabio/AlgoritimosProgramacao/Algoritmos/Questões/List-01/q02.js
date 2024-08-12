import { question } from "readline-sync"
function main(){
    //Input
    const value_hours = parseInt(question("Enter a value in hours: "))
    const value_minutes = parseInt(question("Enter a value in minutes: ")) 

    //Processing
    const total_value_minutes = value_hours * 60 + value_minutes

    //Output
    console.log(`The total value in minutes of ${value_hours} hours and ${value_minutes} minutes is: ${total_value_minutes} minutes`)
}


main()