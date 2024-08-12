import { question } from "readline-sync";
function main(){

   const num = Number(question("Enter a number N: "))
   let value = 1

   while(value <= num){
    if(value % 2 == 0){
        console.log(`${value}`)
        
    }
    value++      
   }
}
main()