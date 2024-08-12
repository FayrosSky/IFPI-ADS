var Hora = /** @class */ (function () {
    function Hora() {
        this.date = new Date();
    }
    Hora.prototype.lerHora = function () {
        return this.date.getHours();
    };
    Hora.prototype.lerMinuto = function () {
        return this.date.getMinutes();
    };
    Hora.prototype.lerSegundos = function () {
        return this.date.getSeconds();
    };
    return Hora;
}());
//Timereader
var hora = new Hora();
console.log("Hora: ".concat(hora.lerHora()));
console.log("Minuto: ".concat(hora.lerMinuto()));
console.log("Segundo: ".concat(hora.lerSegundos()));
