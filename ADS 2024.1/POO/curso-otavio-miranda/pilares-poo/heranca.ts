// Herança: visa passar características de um objeto para outro

export abstract class Animal {
    constructor(public name: string) {}
    abstract makeNoise(): void;
}
export Class Dog extends Animal {
    makeNoise(): void {
        console.log(`${this.name} está fazendo AU AU...`);
    }
}
export class Cat extends Animal {
    makeNoise(): void {
        console.log(`${this.name} está fazendo MIAU...`);
    }

}

/*
    Observe que duas classes diferentes (cachorro e gato), implementam um método de formas diferentes, isso é um exemplo de polimorfismo.

*/