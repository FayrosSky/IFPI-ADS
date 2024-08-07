"use strict";
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
class Radio {
    constructor(volume) {
        this.volume = volume;
    }
}
let r = new Radio(10); // Erro de compilação
r.volume = 10;
//# sourceMappingURL=q04.js.map