import { question } from "readline-sync";
function main(){
    //Input
    const base = parseFloat(question("Enter base of the rectangule: "))
    const height = parseFloat(question("Enter the height of the rectangule: "))

    //Processing
    const rectangule_area = base * height

    //Output
    console.log(`The rectangule area with base length of ${base} and the height lenght of ${height} is equal to: ${rectangule_area} a.u`)
}

main()