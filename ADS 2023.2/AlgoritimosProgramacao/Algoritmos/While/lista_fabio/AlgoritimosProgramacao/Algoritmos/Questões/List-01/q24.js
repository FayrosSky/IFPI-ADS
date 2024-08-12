import { question } from "readline-sync";
function main(){
//Input
    const value_meter = parseFloat(question("Enter a value in m: "))

//Processing
    const value_cm = value_meter * 100

//Output
    console.log(`The entered value in meter of ${value_meter} m is equal to: ${value_cm} cm`)

}
main()