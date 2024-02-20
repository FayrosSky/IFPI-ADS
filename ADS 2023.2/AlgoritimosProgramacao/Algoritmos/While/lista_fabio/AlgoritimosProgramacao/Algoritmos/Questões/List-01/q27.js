import { question } from "readline-sync";
function main(){
    //Input
    const seconds = parseInt(question("Enter a value in seconds: "))

    //Processing
    const value_hours = Math.floor(seconds / 3600)
    const value_minutes = Math.floor((seconds % 3600) / 60)
    const value_seconds = (seconds % 3600) % 60

    //Output
    console.log(`The entered value of ${seconds} seconds converted to hours, minutes and seconds is equal to: ${value_hours} hours, ${value_minutes} and ${value_seconds} seconds`)

}
    



main()