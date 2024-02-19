import { question } from "readline-sync"
function main(){
    //Input
    const sms = parseInt(question("Enter a speed in m/s: "))

    //Processing
    const skm = sms * 3.6 

    //Output
    console.log(`The speed of ${sms} m/s converted to km/h is: ${skm} k/h`)
}

main()