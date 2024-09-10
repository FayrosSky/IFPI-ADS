export class Empresa {
    public readonly nome: string = 'Luiz'; //assim fica redundante, pois ele já infere que é string //como não vamos alter o nome da empresa posteriormente, utilizamos o readonly(essa é a versão longa)


    constructor(nome: string) {
        this.nome = nome; // estamos só incializando o valor dele, uma vez inicializado, não podemos mais alterar o valor dele, já que e readonly//usamos o this pra acessar o nome declarado lá em cima
    }

}

//public nos diz que ele pode ser alterado e acessado fora da classe
// readonly diz que ele não pode ser alterado, ou seja, só vai poder ser lido fora da classe