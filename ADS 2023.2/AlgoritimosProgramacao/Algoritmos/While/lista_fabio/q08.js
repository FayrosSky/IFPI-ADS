import { question } from "readline-sync";
import { print } from "../../utils/input.js";

function main(){

    const N = Number(question("Enter a number: "))
    const upper_limit = Number(question("Enter a upper limit: "))
    const lower_limit = Number(question("Enter a lower_limit: "))
    let count = 1

    while(count <= upper_limit){
        while(count % N == 0){
            print(`The multiples of ${N} between ${lower_limit} to ${upper_limit} are: ${count}`)
            break
        }
        count++

    }
}
main()