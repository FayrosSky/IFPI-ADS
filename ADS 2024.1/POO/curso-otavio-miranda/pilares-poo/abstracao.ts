/*
    Abstração: Permite isolar de um objeto somente os conceitos que são necessários para o funcionamento do programa.
    Em resumo: Isolar as partes importantes que estamos modelando. 
*/
//Ex: Ánalise de uma pessoa(veias, artérias e nome, sobrenome)

export class Pessoa {
    private nome: string;
    private sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
