import { question } from "readline-sync";
function main(){
    //Input
    const radius = parseFloat(question("Enter the circumference radius value: "))

    //Processing
    const circumference_length = 2 * 3.14 * radius

    //Output
    console.log(`The circumference length od radius ${radius} is equal to: ${circumference_length}`)
    
}

main()