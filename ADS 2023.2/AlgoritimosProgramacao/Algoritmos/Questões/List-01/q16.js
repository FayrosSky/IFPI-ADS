import { question } from "readline-sync";
function main(){
    //Input
    const side_square = parseFloat(question("Type the value of the square of side:"))

    //Processing
    const area = side_square ** 2
    const rounded_area = area.toFixed(2)

    //Output
    console.log(`The value of the area of the square with length of the side ${side_square} is: ${rounded_area} a.u`)

}

main()