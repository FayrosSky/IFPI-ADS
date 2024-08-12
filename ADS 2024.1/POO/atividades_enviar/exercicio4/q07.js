var Triangulo = /** @class */ (function () {
    function Triangulo(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangulo.prototype.ehTriangulo = function () {
        return Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c;
    };
    Triangulo.prototype.ehIsoceles = function () {
        if (!this.ehTriangulo()) {
            return false;
        }
        return ((this.a === this.b && this.a !== this.c) ||
            (this.a === this.c && this.a !== this.b) ||
            (this.b === this.c && this.b !== this.a));
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (!this.ehTriangulo()) {
            return false;
        }
        return this.a === this.b && this.b === this.c;
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (!this.ehTriangulo()) {
            return false;
        }
        return this.a !== this.b && this.b !== this.c && this.a !== this.c;
    };
    return Triangulo;
}());
// Exemplo de uso da classe Triangulo
var triangulo1 = new Triangulo(3, 4, 5);
console.log(triangulo1.ehIsoceles()); // true
console.log(triangulo1.ehEquilatero()); // false
console.log(triangulo1.ehEscaleno()); // false
var triangulo2 = new Triangulo(5, 5, 5);
console.log(triangulo2.ehIsoceles()); // true
console.log(triangulo2.ehEquilatero()); // true
console.log(triangulo2.ehEscaleno()); // false
var triangulo3 = new Triangulo(3, 4, 7);
console.log(triangulo3.ehIsoceles()); // false
console.log(triangulo3.ehEquilatero()); // false
console.log(triangulo3.ehEscaleno()); // false
