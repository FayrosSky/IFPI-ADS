import { question } from "readline-sync";
function main(){
    //Input
    const real_valeu = parseFloat(question("Enter a real value: "))

    //Processing
    const new_real_value = real_valeu * 1.7

    //Output
    console.log(`The entered value increased by 70% is equal to: ${new_real_value}$`)
}
main()