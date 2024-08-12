"use strict";
class Hora {
    constructor() {
        this.date = new Date();
    }
    lerHora() {
        return this.date.getHours();
    }
    lerMinuto() {
        return this.date.getMinutes();
    }
    lerSegundos() {
        return this.date.getSeconds();
    }
}
//Timereader
const hora = new Hora();
console.log(`Hora: ${hora.lerHora()}`);
console.log(`Minuto: ${hora.lerMinuto()}`);
console.log(`Segundo: ${hora.lerSegundos()}`);
//# sourceMappingURL=q02.js.map