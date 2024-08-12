import { question, questionFloat } from "readline-sync";

function main(){
    //Input
    const radius = parseFloat(question("Enter the value of the radius: "))

    //Processing
    const volume_sphere = ((4 * 3.14 * radius ** 3) / 3).toFixed(2)
    

    //Output
    console.log(`The volume of radius equal to ${radius} is equal to: ${volume_sphere} v.u`)
}
main()