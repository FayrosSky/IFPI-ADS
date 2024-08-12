import { question } from "readline-sync";

function main(){
    const num = Number(question("Enter a number: "))
    let value = 1
    while(value <= num){
        console.log(`${value}`)
        value++

    }
}
main()