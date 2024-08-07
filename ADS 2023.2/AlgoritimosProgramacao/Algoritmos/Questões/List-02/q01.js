import { question } from "readline-sync";

function main(){
    //Input
    const num1 = Number(question("Enter a number: ")) 
    const num2 = Number(quesiton("Enter a second number: "))
    const num3 = Number(question("Enter a third number: "))

    //Processing

    const count = 0;   
    
    if (num1 == num2){
        count += 1
    }
    
    else if (num1 == num3){
        count += 1
    }

    else if (num2 == num3){
        count += 1
    }

    //Output
    console.log(`A quantidade de numeros iguais e: ${count}`)
}
main()