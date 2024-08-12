import { question } from "readline-sync";
function main(){
    //Input
    const temperatureC = parseFloat(question("Enter a temperature in °C: ")) 

    //Processing
    const temperatureF = (9 * temperatureC + 160)/5

    //Output
    console.log(`The temperature of ${temperatureC} °C converted to °F is equal to: ${temperatureF} °F`)
}

main()