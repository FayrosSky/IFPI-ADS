export class Calculadora {
    private operando_1: number;
    private operando_2: number;

    constructor(operando_1: number, operando_2: number) {
        this.operando_1 = operando_1;
        this.operando_2 = operando_2;
    }

    soma(a: number, b: number): number {
        return a + b

    }

    subtracao(a: number, b: number): number {
        if (a > b) {
            return a - b;
        } else {
            return b - a;
        }
    }

    calcular(): void {
        const resultado_soma = this.soma(this.operando_1, this.operando_2);
        const resultado_subtracao = this.subtracao(this.operando_1, this.operando_2)

        console.log(`O resultado de ${this.operando_1} + ${this.operando_2} é igual a: ${resultado_soma} `);
        console.log(`O resultado de ${this.operando_1} - ${this.operando_2} é igual a: ${resultado_subtracao}; `);


    }
}

const calculadora = new Calculadora(5, 3);
calculadora.calcular();


