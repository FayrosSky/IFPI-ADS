import { question } from "readline-sync";

console.log('***** Half-yearly average *****')
//Input
const grade1 = Number(question('First grade: '))
const grade2 = Number(question('Second grade: '))



//Processing 
const average = (grade1 + grade2)/2

//Output
console.log(`Your avarege is: ${average}`)