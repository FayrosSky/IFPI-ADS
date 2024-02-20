import { question } from "readline-sync";

function program(){

    // Ask for the total credit card bill
    const total_current_creditcard_bill = Number(question("Total credit card bill R$:"))


    // Calculate the minimun (20%)
    const minimum_bill = total_current_creditcard_bill * (20/100)

    // Ask the monthly revolving interest rate
    const revolving_interest_rate = Number(question('Revolving interest rate (a.m): '))

    // Display total and minimum value
    console.log('----- Bill detais -----')
    console.log(`Total credit card bill: ${RS(total_current_creditcard_bill)}`)
    console.log(`Pay minimum: ${RS(minimum_bill)}`)

    //P1: Ask how much you will pay and months
    console.log('P1 - Payment plan 1: ')
    const p1_value = Number(quesiton('Amount R$:'))
    const month_late_p1 = Number(question('months late: '))


    //P2: Ask how much you will pay and months
    







}

program()