import { question, questionInt } from "readline-sync";
import { print } from "./input.js";
import {ulid} from 'ulidx';
import fs from 'fs'

export function mostrar_montadoras(montadoras) {
    for (let i = 0; i < montadoras.length; i++) {

    }
}

export function criar_montadora() {
    let montadora = {}
    const nome = question("Digite o nome da montadora: ")
    const pais = question("Digite o pais da montadora: ")
    const ano = question("Digite o ano da fundação da montadora: ")
    montadora["nome"] = nome
    montadora["pais"] = pais
    montadora["ano"] = ano
    print("Montadora criada com sucesso!")
    return montadora

}

export function ler() {
    const montadoras = []
    const arquivo = readFileSync("montadora.txt", "utf-8")

}

export function filtrar(vetor, criterio) {
    const cestinha = []
    for (let item of vetor) {
        if (criterio(item)) {
            cestinha.push(item)
        }
    }
    return cestinha
}

export function mapear(vetor, conversor) {
    const cestinha = []
    for (let item of vetor) {
        const item_convertido = conversor(item)
        cestinha.push(item_convertido)
    }
    return cestinha
}

export function reduzir(vetor, operacao, valor_inicial) {
    let valor_reduzido = valor_inicial
    for (let item of vetor) {
        valor_reduzido = operacao(valor_reduzido, item)
    }

    return valor_reduzido
}


export function nova_montadora() {
    const montadora = {
        'id': ulid(),
        'nome': '',
        'ano_fundacao': 0
    }

    montadora['nome'] = question('Nome: ');
    montadora['ano_fundacao'] = Number(question('Ano fundação: '));
    montadora['pais'] = question('Pais da montadora: ')
    return montadora;
}

export function listar_montadoras(montadoras) {
    /*for (let montadora of montadoras) {
        console.log(montadora);
    }*/
    console.table(montadoras)
}

export function editar_montadora(montadoras) {
    print("Editar montadora")

    listar_montadoras(montadoras)

    const id_montadora_editar = question("Digite o ID da montadora que deseja editar: ")

    const montadora_editar = montadoras.find(montadora => montadora.id === id_montadora_editar)
    if (!montadora_editar) {
        console.log("Montadora não encontrada. Insira o id correto.")
        return
    }

    //Informações da montadora antes da edição
    print("Informações da montadora antes da edição:")
    exibir_informacoes_montadora(montadora_editar)

    //Obter novas informações da montadora
    const novas_informacoes = obter_novas_informacoes_montadora()

    //Atualizar as informações da montadora
    montadora_editar.nome = novas_informacoes.nome
    montadora_editar.ano_fundacao = novas_informacoes.ano_fundacao
    montadora_editar.pais = novas_informacoes.pais

    //Exibir informações da montadora depois da edição
    print("Informações da montadora depois da edição: ")
    exibir_informacoes_montadora(montadora_editar)

}

export function exibir_informacoes_montadora(montadora) {
    //print(`ID: ${montadora.id}, Nome: ${montadora.nome}, Ano de fundação: ${montadora.ano_fundacao}`)
    console.table(montadora)
}

export function obter_novas_informacoes_montadora() {
    const novas_informacoes = {};
    novas_informacoes.nome = question("Digite o novo nome da montadora: ")
    novas_informacoes.ano_fundacao = Number(question("Digite o novo ano de fundacao: "))
    novas_informacoes.pais = question("Digite o pais da montadora: ")
    return novas_informacoes
}

export function remover_montadora() {
    print("Romver montadora")
    listar_montadoras(montadoras)
    const nome_montadora_remover = question("Digite o ID da montadora que deseja remover: ")
    const indice_montadora = montadoras.findIndex(montadora => montadora.nome === nome_montadora_remover)
    if (indice_montadora !== -1) {
        montadoras.splice(indice_montadora, 1)
        print("Montadora removida com sucesso.")
    } else {
        print("Montadora não encontrada. Insira o ID correto.")
    }

}
/*
function filtrar_montadora() {
    const ano_filtro = Number(question("Digite o ano de fundação para filtrar:"))
    const montadoras_filtradas = montadoras.filter(montadora => montadora.ano_fundacao === ano_filtro)

    if (montadoras_filtradas.length > 0) {
        print(`Montadoras fundadas em ${ano_filtro}`)
        listar_montadoras(montadoras_filtradas)
    } else {
        print(`Nenhuma montadora fundada em ${ano_filtro} encontrada.`)
    }
}
*/ //se fosse por ano essa filter estaria 100% correta

export function filtrar_montadoras() {
    const criterio = question("Escolha o critério de filtragem (nome, pais): ");
    const valor_filtro = question(`Digite o valor para ${criterio}: `);
    let montadoras_filtradas = [] //nem precisa inicializar com o array vazio

    /*
    if (criterio === 'pais'){
        //montadoras_filtradas = montadoras.filter(montadora.pais === valor_filtro) fazemos a arrow function justamente para permitir que a filter chame a nossa expressão quantas vezes quiser, do jeito que tá aí iria comparar uma única vez
        montadoras_filtradas = montadoras.filter(montadora => montadora.pais.toLowerCase().includes(valor_filtro.toLowerCase())) //=== valor_filtro.toLowerCase()) // a expressão toda que vai ser comparada fica à direita da arrow function, já a variável imaginária vai ser o parâmetro(variável que muda a cada item de montadora) que fica à esquerda
    } else if (criterio === 'nome'){
        montadoras_filtradas = montadoras.filter(montadora => montadora.nome.toLowerCase().includes(valor_filtro.toLowerCase())) //=== valor_filtro.toLowerCase())
    } else {
        print("Critério inválido!")
        return
    }
    
    const criterio_2 = question("Digite o criterio de ordenação (nome, ano, pais, id)")
    if (criterio_2 === 'pais')
    montadoras_filtradas.sort((a, b) => a.pais.localeCompare(b.pais))
    console.log(montadoras_filtradas)

    if (montadoras_filtradas.length > 0) {
        console.log(`Montadoras filtradas pelo critério ${criterio} = ${valor_filtro}:`);
        console.table(montadoras_filtradas)
    } else {
        console.log(`Nenhuma montadora encontrada com o critério ${criterio} = ${valor_filtro}.`);
    }
    */ //maneira menos trabalhosa

    //Maneira mais trabalhosa
    for (let i = 0; i < montadoras.length; i++) {
        const montadora = montadoras[i]

        if (criterio === 'pais' && montadora.pais.toLowercase().includes(valor_filtro.toLowerCase())) {
            montadoras_filtradas.push(montadora);
        } else if (criterio === 'nome' && montadora.nome.toLowerCase().includes(valor_filtro.toLowerCase())) {
            montadoras_filtradas.push(montadora)
        }
    }

    //Usando método nativo
    const criterio_2 = question("Digite o critério de ordenação (nome, pais, ano)")
    if (criterio_2 === 'pais') {
        montadoras_filtradas.sort((a, b) => a.pais.localeCompare(b.pais))
        console.table(montadoras_filtradas)
    } else if (criterio_2 === 'nome') {
        montadoras_filtradas.sort((a, b) => a.nome.localeCompare(b.nome))
        console.table(montadoras_filtradas)
    } else if (criterio_2 === 'ano') {
        montadoras_filtradas.sort((a, b) => a.ano - b.ano)
        console.table(montadoras_filtradas)
    }


    //Fazendo da forma mais trabalhosa
    /*
        function ordenar_por_pais(montadoras) {
            return montadoras
        }

        function ordenar_por_nome(montadoras) {
            return montadoras
        }

        function ordenar_por_ano(montadoras) {
            return montadoras
        }
    }
    */

    /*function aguardarPor(segundos) {
        return new Promise(resolve => setTimeout(resolve, segundos * 1000)) //função assycrona
    }*/

}

export function guarda_dados_em_arquivo(montadoras) {
    let dados_salvar = ''
    console.table("montadoras = ", montadoras)
    for (const montadora of montadoras) {
        dados_salvar += `Nome: ${montadora.nome}, Pais: ${montadora.pais}, Ano: ${montadora.ano}, ID: ${montadora.id}\n`
    }

    const nome_Arquivo = 'montadora.txt'

    fs.writeFileSync('montadora.txt', dados_salvar, 'utf-8')
}

export function status_montadora(montadoras) {
    const quant_montadoras = montadoras.length
    console.log(`Status: Temos ${quant_montadoras} montadora(s) cadastrada(s).`)
}


