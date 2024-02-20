import { question } from "readline-sync";
 function main(){
   //Input
   const base = parseFloat(question("Type the base of the triangle: "))
   const height = parseFloat(question("Type the height of the triangle: "))

   //Processing
   const area = (base * height)/2

   //Output
   console.log(`The area of the triangule with base of ${base} and height of ${height} is equal to: ${area} a.u`)
 }
 main()