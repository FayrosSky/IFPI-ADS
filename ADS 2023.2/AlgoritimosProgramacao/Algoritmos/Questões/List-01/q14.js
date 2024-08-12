import { question } from "readline-sync";

function main(){
    //Input
    const grade1 = parseFloat(question("Enter the value of the first grade: "));
    const grade2 = parseFloat(question("Enter the value of the secone grade: "));
    const grade3 = parseFloat(question("Enter the value of the third grade: "));

    const weight_grade1 = parseInt(question("Enter the weight of the grade1: "));
    const weight_grade2 = parseInt(question("Enter the weight of the grade2: "));
    const weight_grade3 = parseInt(question("Enter the weight of the grade3: "));

    //Processing
    const weighted_media = ((grade1 * weight_grade1) + (grade2 * weight_grade2) + (grade3 * weight_grade3)) / (weight_grade1 + weight_grade2 + weight_grade3);
    const rounded_weighted_media = weighted_media.toFixed(2);

    //Output
    console.log(`The weighted media of the grades ${grade1}, ${grade2}, ${grade3} and the weights ${weight_grade1}, ${weight_grade2}, ${weight_grade3} is equal to: ${rounded_weighted_media}`);


}
main()