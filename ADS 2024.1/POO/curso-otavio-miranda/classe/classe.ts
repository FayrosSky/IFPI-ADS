export class Empresa {
    public readonly nome: string = 'Luiz'; //assim fica redundante, pois ele já infere que é string //como não vamos alter o nome da empresa posteriormente, utilizamos o readonly(essa é a versão longa)
    private readonly colaboradores: Colaborador[] = []; //observe que vai dar erro enquanto não criarmos a classe colaborador. Obser que isso pode parecer meio estranho, pois temos um atributo de colaboradores que pode ser do tipo array de colaboradores, mas estamos passando um array vazio como um valor inicial... em algumas casos vamos precisar dessa forma mais longa pra inicializar esse atributo.
    protected readonly

    constructor(nome: string) {
        this.nome = nome; // estamos só incializando o valor dele, uma vez inicializado, não podemos mais alterar o valor dele, já que e readonly//usamos o this pra acessar o nome declarado lá em cima
    }
}

export class Colaborador {}

const empresa1 = new Empresa('Udemy');
console.log(empresa1);
//empresa1.nome = 'Facebook'; não podemos atribuir, pois é uma propriedade só de leitura de acorodo com o readonly
console.log(empresa1.nome);




//public nos diz que ele pode ser alterado e acessado fora da classe
// readonly diz que ele não pode ser alterado, ou seja, só vai poder ser lido fora da classe