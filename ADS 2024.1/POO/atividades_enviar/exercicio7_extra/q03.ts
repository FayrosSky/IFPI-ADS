import { Pessoa } from "./q02";

class Funcionario extends Pessoa{
    private _matricula: string;
    private _salario: number;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number){
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = Math.max(0, salario); //garante que o salário não será negativo
    }

    public get matricula(): string{
        return this._matricula;
    }

    public get salario(): number{
        return this._salario;
    }

    public calcularSalarioPrimeiraParcela(): number{
        return this._salario * 0.6; // 60% do salário
    }

    public calcularSalarioSegundoParcela(): number{
        return this._salario * 0.4; // 40% do salário
    }


}

const funcionario = new Funcionario("Joao", "Silva", "123456", 5000);
console.log(`Salário total: ${funcionario.salario}`)
console.log(`Primeira Parcela: ${funcionario.calcularSalarioPrimeiraParcela()}`)
console.log(`Segunda parcela: ${funcionario.calcularSalarioSegundoParcela()}`)