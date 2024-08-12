import { question } from "readline-sync";


export function get_text(label) {
    return question(label)
}

export function get_number(label) {
    return Number(question(label))
}

export function get_number_min(label, minimo) {
    let numero = get_number(label)
    return numero
}

export function print(label) {
    console.log(label)
}

export function limpar_terminal() {
    console.clear()
}

export function press_enter_to_continue() {
    print("Press enter to continue")
    question("Enter")
}




