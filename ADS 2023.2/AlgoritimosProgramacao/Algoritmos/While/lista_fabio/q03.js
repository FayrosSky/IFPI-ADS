import { question } from "readline-sync";
import { print } from "../../utils/input.js";

function main(){
    const A0 = Number(question("Enter a initial number: "))
    const limit = Number(question("Enter the limit of the Arithmetic Progression: "))
    const common_difference = Number(question("Enter the value of the common_difference of the A.P: "))
    let An = A0 

    while(An < limit){
        print(`${An}`)
        An = An + common_difference
    }
}

main()