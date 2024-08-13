class Funcionario extends Pessoa{
    private _matricula: string;
    private _salario: number;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number){
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = salario;
    }

    public get matricula(): string{
        return this._matricula;
    }

    public get salario(): number{
        return this._salario;
    }
}

const funcionario = new Funcionario("Joao", "Silva", "123456", 5000);