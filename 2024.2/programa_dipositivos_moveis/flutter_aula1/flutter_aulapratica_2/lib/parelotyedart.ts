class Longo { 
    public x: number; //definindo o atributo
    constructor(x: number) { //definindo o parâmetro do construtor
        this.x = x; //inicializar o atributo classe
    }               //construtor é uma função, não tem atributo e sim parâmetro, classe tem atributo
}

class Curto {
    constructor(public x: number) {}
}

//nessa forma curta estamos definindo o atributo, definindo o parâmetro do construtor e inicializando o atributo da classe