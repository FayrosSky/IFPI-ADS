import { question } from "readline-sync"
import { limpar_terminal, press_enter_to_continue, print } from "../utils/input.js"
import { nova_montadora, listar_montadoras, editar_montadora, exibir_informacoes_montadora, obter_novas_informacoes_montadora, remover_montadora, filtrar_montadoras, guarda_dados_em_arquivo, status_montadora} from "../utils/montadoras_utils.js"
import { ulid } from 'ulidx'
import fs from 'fs'

const montadoras = []

function main() {
    while (true) {
        limpar_terminal();
        print(menu())
        status_montadora(montadoras)
        const opcao = Number(question());

        if (opcao === 1) {
            const montadora = nova_montadora()
            montadoras.push(montadora)
            guarda_dados_em_arquivo(montadoras)
        } else if (opcao === 2) {
            listar_montadoras(montadoras);
            //await aguardarPor(2)
        } else if (opcao === 3) {
            editar_montadora(montadoras)
            guarda_dados_em_arquivo(montadoras)
        } else if (opcao === 4) {
            remover_montadora(montadoras)
            guarda_dados_em_arquivo(montadoras)
        } else if (opcao === 5) {
            filtrar_montadoras()
            guarda_dados_em_arquivo(montadoras)
        }
        else if (opcao === 0) {
            console.log("Saindo do programa.");
            guarda_dados_em_arquivo(montadoras)
            break;

        } else {
            console.log("Opção inválida. Tente novamente.");
        }


        press_enter_to_continue()
    }
}

function menu() {
    const opcoes = `
    ****** MENU ******
    1 - Criar montadora
    2 - Listar montadoras
    3 - Atualizar montadora
    4 - Remover
    5 - Filtrar      
    0 - Sair `;
    return opcoes;
}

main()