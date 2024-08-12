class veiculo {
    private _placa: string;
    private _ano: number;

    constructor(placa: string, ano: number) {
        this._placa = placa;
        this._ano = ano;
    }

    public get placa(): string {
        return this._placa;
    }

    public get ano(): number{
        return this._ano;
    }
}   

class Carro extends veiculo {
    private _modelo: string;

    constructor(placa: string, ano: number, modelo: string){
        super(placa, ano);
        this._modelo = modelo;
    }

    public get modelo(): string {
        return this._modelo;
    }
}

class CarroEletrico extends Carro{
    private _autonomiaBateria: number;
    

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number){
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }

    public get autonomiaBateria(): number{
        return this._autonomiaBateria;
    }
}


const carro = new Carro('ABC-1234', 2022, 'Modelo A');
console.log(carro.placa);
console.log(carro.ano)
console.log(carro.modelo)





//super é uma palavra usada para acessar alguma coisa da superclasse, nesse caso, o construtor.


