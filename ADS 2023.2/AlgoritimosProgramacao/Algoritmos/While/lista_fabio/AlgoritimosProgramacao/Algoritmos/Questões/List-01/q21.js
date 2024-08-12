import { question } from "readline-sync";
function main(){
    //Input
    const temperatureF = parseFloat(question("Enter a temperature in °F: "))

    //Processing
    const temperatureC = ((5 * temperatureF) - 160)/9

    //Output
    console.log(`The temperature of ${temperatureF} °F converted in °C is equal to: ${temperatureC} °C`)

}
main()