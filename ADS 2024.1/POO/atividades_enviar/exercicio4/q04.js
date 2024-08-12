/*
class Radio {
    volume: number;

    constructor(volume: number) {
        this.volume = volume;
    }
}

let r: Radio = new Radio(); // Erro de compilação
r.volume = 10;
*/
//Para corrigir fornecemos o argumento necessário no momento da criação da instância. 
var Radio = /** @class */ (function () {
    function Radio(volume) {
        this.volume = volume;
    }
    return Radio;
}());
var r = new Radio(10); // Erro de compilação
r.volume = 10;
