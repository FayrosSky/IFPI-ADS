import { print } from "../../utils.js";

function main(){
    const grade1 = Number(question("Enter the first grade: "))
    const grade2 = Number(question("Enter the second grade: "))
    const grade3 = Number(question("Enter the third grade: "))

    const media = calculate_media(grade1, grade2, grade3)
    
    print(`The media value is: ${media}`)
}

function calculate_media(grade1, grade2, grade3){
    const media_value = ((2 * grade1) + (3 * grade2) + (5 * grade3))/10
    return media_value
} 
main()
