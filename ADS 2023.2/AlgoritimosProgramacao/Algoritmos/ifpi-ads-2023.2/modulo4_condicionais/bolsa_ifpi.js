import { question } from "readline-sync";

function main(){
    const renda_familiar = Number(question('Renda Familiar: '))

    const valor_auxilio = calcular_bolsa(renda_familiar)

    print(`Valor da Bolsa é: R$ ${valor_auxilio.toFixed(2)}   `)
}

function calcular_bolsa(renda_familiar){
    /*
     * 0 até 1SM --> 800
     * 1SM+ - 2SM --> 600
     * 2SM  - 3SM --> 400
     * 3SM+       --> 200
     */
    const salario_minimo = 1320
    if (renda_familiar <= salario_minimo){
        return 800
    }else if(renda_familiar <= 2 * salario_minimo){
        return 600
    }else{
        return 200
    }

}

    function print(label){
        console.log(`${label}`)
    }



main()