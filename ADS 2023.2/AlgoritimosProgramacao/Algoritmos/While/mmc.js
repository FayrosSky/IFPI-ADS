import { print, get_positive_number } from "../utils/input.js";

function main(){
    const num1 = get_positive_number("Número 1:")
    const num2 = get_positive_number("Nḿero  2:")
    let mmc = num1

    //1° forma 
    //while(true){
      //  if (mmc % num1 === 0 && mmc % num2 === 0){
        //    break
       // }
       // mmc++
   // }
    
    //2° forma:
    while(mmc % num1 === 0 && mmc % num2 === 0){
        mmc++
    }
    print(`${mmc}`)

    //3° forma:  negar a expressão booleana que a gente colocou como verdadeira
    //while(!(mmc % num1 === 0) || (mmc % num2 === 0)){
        
    //}
}
main()