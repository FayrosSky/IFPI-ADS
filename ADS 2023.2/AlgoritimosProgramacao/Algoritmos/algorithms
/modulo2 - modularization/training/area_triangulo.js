import { question } from "readline-sync";

function program(){
    console.log('*****  Triangle Area *****')
    // Input
    const base = Number(question('Base: '))
    const height = Number(question('height: ')) 
    
    //Processing
    const area = calculate_area_triangle(base, height)


    //Output
    console.log(`The area is: ${area} a.u`)


    //Function's definition
    function calculate_area_triangle(b, h){
        const result = (b * h)/2
        return result 
    }


}

program()