import { question } from "readline-sync";
import { get_number, get_number_min, print, print_inline} from "../utils/input.js";

function main(){

let num = Number(question("Digite um numero: "))

while(num != 0){
    let divisor = 1
    while(divisor <= num){
        if(num % divisor == 0){ 
            print_inline(`${divisor} e divisor de ${num}, `)
        }
        divisor++
    }
    num = Number(question("Digite um outro numero: "))
}

}

main()
