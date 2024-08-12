import { question } from "readline-sync"
import { print, get_positive_number} from "../utils/input.js"
import { preencher_manualmente } from ".Playnumbersutils.js"
function main(){
    while(true){
        print("----------Menu------------")
        print("-------- VETORES ---------")
        print("1 - Inicializar Vetor numérico")
        print("2 - Mostrar todos os valores")
        print("3 - Resetar Vetor (pedir valor número padrão)")
        print("4- Ver quantidade de itens no vetor")
        print("5 - Ver Menor e Maior valores e suas posições")
        print("6 - Média dos valores")
        print("7 - Somatório dos Valores")
        print("8 - Mostrar valores positivos e Quantidades")
        print("9 - Mostrar valores negativos e suas Quantidades")
        print("10 - Atualizar todos so valores")
        print("0 - Sair")
        break
    }

    let opcao = get_positive_number("Escolha uma opção: ")

    if(opcao == 1){
        print("1 - Vetor com dados automáticos ")
        print("2 - Informar valores para o vetor")

        if(opcao == 1){
            print("Informar o valor máximo do vetor")
        }

        let vetor = preencher_manualmente
    /* }elseif(opcao == 2){

    }elseif(opcao == 3){

    }elseif(opcao == 4){

    }elseif(opcao == 5){

    }elseif(opcao == 6){

    }elseif(opcao == 7){

    }elseif(opcao == 8){

    }elseif(opcao == 9){

    }elseif(opcao == 10){

    }else{
    */
    }
    





}
main()