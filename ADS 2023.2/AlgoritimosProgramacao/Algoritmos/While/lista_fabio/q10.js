import { question } from "readline-sync";
import { print } from "../../utils/input.js";

function main(){
    const upper_limit = Number(question("Enter the upper limit: "))
    const lower_limit = Number(question("Enter the lower limit: "))
    let count = lower_limit

    while (count <= upper_limit){
        while(!(count % 2 == 0)){
            print(`The odds numbers from ${lower_limit} to ${upper_limit} are: ${count}`)
            count++
        }
        count++
    }

}
main()