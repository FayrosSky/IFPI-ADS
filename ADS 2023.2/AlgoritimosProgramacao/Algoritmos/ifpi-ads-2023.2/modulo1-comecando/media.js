import { question } from 'readline-sync'

//Input
const subject_grade1 = Number(question("subject grade 1: "))
const subject_grade2 = Number(question("subject grade 2: "))

//Processing
const average = (subject_grade1 + subject_grade2)/2

//Output
console.log(`The average is: ${avarage}`)