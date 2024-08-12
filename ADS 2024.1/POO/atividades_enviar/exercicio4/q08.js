var Equipamento = /** @class */ (function () {
    function Equipamento() {
        this.ligado = false;
    }
    Equipamento.prototype.liga = function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log("Equipamento ligado.");
        }
        else {
            console.log("Equipamento já está ligado.");
        }
    };
    Equipamento.prototype.desliga = function () {
        if (this.ligado) {
            this.ligado = false;
            console.log("Equipamento desligado.");
        }
        else {
            console.log("Equipamento já está desligado.");
        }
    };
    Equipamento.prototype.inverte = function () {
        this.ligado = !this.ligado;
        console.log(this.ligado
            ? "Equipamento ligado."
            : "Equipamento desligado.");
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
// Exemplo de uso da classe Equipamento
var equipamento = new Equipamento();
console.log(equipamento.estaLigado()); // false
equipamento.liga();
console.log(equipamento.estaLigado()); // true
equipamento.liga(); // Equipamento já está ligado.
equipamento.desliga();
console.log(equipamento.estaLigado()); // false
equipamento.desliga(); // Equipamento já está desligado.
equipamento.inverte();
console.log(equipamento.estaLigado()); // true
equipamento.inverte();
console.log(equipamento.estaLigado()); // false
