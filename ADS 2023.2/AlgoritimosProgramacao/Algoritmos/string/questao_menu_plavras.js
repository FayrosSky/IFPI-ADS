import { enter_to_continue, get_positive_number, print } from "../utils/input.js";

function main() {
    let numero = get_positive_number(' ');

    const menu = `
    |--------- MENU ---------|
    1 - Imprima as palavras com mais de 20 caracteres
    2 - Verificar se a palavra tem a letra "e"
    3 - Verificar se a palavra possui letras proibidas
    4 - Verificar se a palavra possui letras da lista 
    5 - Verificar se a palavra usa todas as letras obrigatórias.
    6 - Verificar se da palavra aparecem em ordem alfabética e quantas palavras em ordem alfabética existem.
    `;

    // Exibe o menu na tela
    print(menu);

    // Aguarda a entrada para continuar
    enter_to_continue();
}

main();

