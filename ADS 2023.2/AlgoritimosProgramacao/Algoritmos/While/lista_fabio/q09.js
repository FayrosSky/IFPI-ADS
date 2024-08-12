import { question } from "readline-sync";
import { print } from "../../utils/input.js";
function main(){

    const upper_limit = Number(question("Enter the upper_limit: "))
    const lower_limit = Number(question("Enter the lower_limit: "))
    let count = 1
    
    while(count <= upper_limit){
        while(count % 2 == 0){
            print(`The evens numbers entered between ${lower_limit} and ${upper_limit} are: ${count}`)
            count++    
        }
        count++
    }
    print("Hello!")
}
main()