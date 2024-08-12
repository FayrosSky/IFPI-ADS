import { question } from "readline-sync";

function main() {
    clear_terminal(); 
    show_header("cdb simulator");

    // Input

    // CDB data
    const invested_amount = Number(question("Enter the amount you want to invest: "));
    const cdb_rate = Number(question("Enter the investment rate value: "));
    const expiry_year = Number(question("Enter the expiry year of the investment: "));

    // Processing
    // Investment time calculation
    const time_year = investment_time_calculation(expiry_year);

    // CDB calculation (using corrected compound_interest function)
    const cdb_yield = calculate_CDB_interest(invested_amount, cdb_rate, time_year);

    // Amount including principal and yield
    const total_withdraw = invested_amount + cdb_yield;

    // Percentage yield calculation
    const percentage_yield = (cdb_yield / invested_amount) * 100;

    console.log(" ");

    show_header("Investment Result");
    // Output
    console.log(`>> Invested value: R$ ${invested_amount.toFixed(2)}`);
    console.log(`>> Yield: R$ ${cdb_yield.toFixed(2)}`);
    console.log(`>> Total to withdraw: R$ ${total_withdraw.toFixed(2)}`);
    console.log(`>> Percentage yield (%): ${percentage_yield.toFixed(2)}%`);
    console.log(" ");

    press_enter_to_continue()
    clear_terminal();
    

    show_header("CDC Simulator");

    // CDC data
    const bank_loan_value = invested_amount;
    const bank_interest = Number(question("Enter the monthly bank interest rate: "));
    const time_month = time_year * 12

    // CDC calculation (you need to implement the CDC calculation function)
    const loan_interest = calculate_CDC_interest(bank_loan_value, bank_interest, time_month);
    const installments = ((bank_loan_value + loan_interest) / time_month).toFixed(2)

    // Bank profit value
    const bank_profit = loan_interest - cdb_yield;

    // Total interest value
    const total_interest_value = bank_loan_value + loan_interest;

    show_header("CDC Result");
    console.log("");
    console.log(`The loan amount is equal to: R$ ${total_interest_value.toFixed(2)}`);
    console.log(`The loan interest: R$ ${loan_interest.toFixed(2)}`);
    console.log(`The loan's installments value is equal to: R$ ${installments}`)
    console.log(" ");
    show_header("Summary");
    console.log(`The CDB interest: R$ ${cdb_yield.toFixed(2)}`);
    console.log(`Bank profit: R$ ${bank_profit.toFixed(2)}`);
    console.log(`Total interest value: R$ ${total_interest_value.toFixed(2)}`);
    console.log("---------------------------------------------------");
}

function investment_time_calculation(year) {
    const time = year - 2023;
    return time;
}

function calculate_CDB_interest(invested_amount, cdb_rate, time_year) {
    return compound_interest(invested_amount, cdb_rate, time_year);
}

function calculate_CDC_interest(bank_loan_value, bank_interest_rate, time_month){
    return compound_interest(bank_loan_value, bank_interest_rate, time_month)
}

function compound_interest(c, i, t) {
    const amount = c * (1 + (i / 100)) ** t;
    const interest = amount - c;
    return interest;
}

function clear_terminal(){
    console.clear()
}

function press_enter_to_continue(){
    console.log("Press enter to continue")
    question("Enter")
}
    
function show_header(text){
    // to get screen width
    const width = process.stdout.columns;
    // create the text that will be displayed
    const header_text = ` ${text} `;
    // calculate the number of space
    const spaces = (width - header_text.length)/2;
    console.log("-".repeat(spaces) + header_text + "-".repeat(spaces));
    console.log(" ");

}

main();
