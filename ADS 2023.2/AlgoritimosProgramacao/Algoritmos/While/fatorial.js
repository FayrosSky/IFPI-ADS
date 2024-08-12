import {get_number_min, print} from "../utils/input.js";
import {fatorial} from "../utils/math.js";
//import { print } from "../utils/input.js";
function main(){
    //let numero = get_positive_number('Número: ')
    let numero = get_number_min('Numero: ', 0)
    //const resultado = fatorial(numero)
    const resultado = fatorial(numero)
    print(`Fatorial de ${numero} é ${resultado}`)
}

main()