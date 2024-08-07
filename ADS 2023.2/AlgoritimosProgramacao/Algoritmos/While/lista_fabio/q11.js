import { question } from 'readline-sync'; 
import { print } from "../../utils/input.js"

function main(){

    const upper_limit = Number(question("Enter the upper limit value: "))
    const lower_limit = Number(question("Enter the lower limit value: "))
    let count = lower_limit
    print(`Os número primos entre ${upper_limit} e ${lower_limit} are: `)

    while(count <= upper_limit){
        if(count == 1){
            return 
        }
        else if(count == 2){
            print(`${2}`)
        }else if(count == 3){
            print(`${3}`)
        }else if(count == 5){
            print(`${5}`)
        }else if(count == 7){
            print(`${7}`)
        }else if(!(count % 2 == 0 || count % 3 == 0 || count % 5 == 0 || count % 7 == 0)){
            print(`${count}`)
        count++
    }
    count++
}
}
main()