import { question } from "readline-sync";
import { print } from "../../utils/input.js";

function main(){
    const A0 = Number(question("Enter the initial value: ")) 
    const limit = Number(question("Enter the limit value: "))
    const R = Number(question("Enter the value of the commom differency of the geometric progression: "))
    let An = A0 

    while(An <= limit){
        print(`${An}`)
        An *= R
    }

}
main()