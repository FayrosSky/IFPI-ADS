import {question} from "readline-sync";

function main(){
    //Input
    console.log("********* CDB Simulator **********")

    //CDB data
    const invested_amount = Number(question("Enter the amount you want to invest: "))
    const cdb_rate = Number(question("Enter the investiment rate value: "))
    const expiry_year  = Number(question("Enter the expiry year of the investiment: "))

    
    //Processing

    //investiment time calculation
    const time_year = investment_time_calculation(expiry_year)

    
    //CDB calculation
    const cdb_yield = calculate_CDB_interest(invested_amount, cdb_rate, expiry_year) 

    //amount
    const total_withdraw = cdb_yield  + invested_amount 

    //percentage_yiel(%)
    const percentage_yield = (cdb_yield / invested_amount) * 100

    //Output
    
    console.log("-------------- Investiment Result -----------------")
    console.log(`>> Invested value: R$ ${invested_amount.toFixed(2)}`)
    console.log(`>> Yield: R$ ${cdb_yield.toFixed(2)}`)
    console.log(`>> Total to withdraw: R$ ${total_withdraw.toFixed(2)} `)
    console.log(`>> Percentage yield (%): R$ ${percentage_yield.toFixed(2)}%`)
    console.log('---------------------------------------------------')



    console.log("--------------- CDC Simulator ----------------------")

    //CDC data
    const bank_loan_value = invested_amount 
    const bank_interest = Number(question("Enter the monthly bank interest rate(%): ")) 
    const time_month = time_year * 12

    //CDC calculation
    const loan_interest = calculate_CDC(bank_loan_value, bank_interest, time_year)
    
    //Bank profite value
    const bank_profite = loan_interest - cdb_yield
    
    //total interest value
    const total_interest_value = bank_loan_value + loan_interest 
    
    console.log("------------------ CDC Result ---------------------")
    console.log(`The loan amount is equal to:  R$${bank_loan_value.toFixed(2)}`)
    console.log(`The loan interest: RS${bank_interest.toFixed(2)}`)


    console.log("------------------ Summary ------------------------")
    console.log(`The CDB interest: R$ - ${cdb_yield.toFixed(2)}`)
    console.log(`Bank profite: R$ ${bank_profite.toFixed(2)}`)
    console.log(`Total interest value: R$ ${total_interest_value.toFixed(2)}`)
    console.log("---------------------------------------------------")

}

function investment_time_calculation(year) {
    const currentYear = new Date().getFullYear();
    return year - currentYear;
}

function calculate_CDB_interest(invested_amount, cdb_rate, time_year){
    return compound_interest(invested_amount, cdb_rate, time_year)
}

function calculate_CDC(invested_amount, bank_interest_rate, time_month){
    return(invested_amount, bank_interest_rate, time_month)
}

function compound_interest(c, i, t){
    return c * Math.pow(1 + i / 100, t) 
}

main()