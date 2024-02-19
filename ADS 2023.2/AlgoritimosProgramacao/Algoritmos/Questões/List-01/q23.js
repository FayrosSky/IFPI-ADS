import { question } from "readline-sync";
function main(){
    //Input
    const value_kg = parseFloat(question("Enter a value in kg: "))

    //Processing
    const value_grama = value_kg * 1000

    //Output
    console.log(`The entered value of ${value_kg} kg converted in g is equal to: ${value_grama} g`)
}
main()