class Calculadora {
    private operando1: number;
    private operando2: number;

    //constructor que inicializa os atributos
    constructor(operando1: number, operando2: number){
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    public soma(): number{
        return this.operando1 + this.operando2;
    }
}

//teste
const calculadora = new Calculadora(5, 10);
console.log(`A soma de ${calculadora['operando1']} e ${calculadora['operando2']} é: ${calculadora.soma()}`);
