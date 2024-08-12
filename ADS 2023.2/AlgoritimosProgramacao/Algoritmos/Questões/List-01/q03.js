import { question } from "readline-sync";
function main(){
    //Input
    const minutes = parseInt(question("Enter a value in minutes: "))

    //Processing
    const value_hours = Math.floor(minutes / 60)
    const value_minutes = minutes % 60
    //Output
    console.log(`The minutes entered conveterd in hours and minutes are: ${value_hours}`)
}
main()