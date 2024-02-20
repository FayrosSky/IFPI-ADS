import { question } from "readline-sync";

function main(){
    //Input
    const value_km = parseFloat(question("Enter a value in km: "));

    //Processing
    const value_m = value_km * 1000;
     
    //Output
    console.log(`The entered value of ${value_km} km is equal to: ${value_m}`);
}
main()