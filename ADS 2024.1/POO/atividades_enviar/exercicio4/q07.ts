class Triangulo {
    private a: number;
    private b: number;
    private c: number;
  
    constructor(a: number, b: number, c: number) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    private ehTriangulo(): boolean {
      return Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c;
    }
  
    ehIsoceles(): boolean {
      if (!this.ehTriangulo()) {
        return false;
      }
      return (
        (this.a === this.b && this.a !== this.c) ||
        (this.a === this.c && this.a !== this.b) ||
        (this.b === this.c && this.b !== this.a)
      );
    }
  
    ehEquilatero(): boolean {
      if (!this.ehTriangulo()) {
        return false;
      }
      return this.a === this.b && this.b === this.c;
    }
  
    ehEscaleno(): boolean {
      if (!this.ehTriangulo()) {
        return false;
      }
      return this.a !== this.b && this.b !== this.c && this.a !== this.c;
    }
  }
  
  // Exemplo de uso da classe Triangulo
  let triangulo1 = new Triangulo(3, 4, 5);
  console.log(triangulo1.ehIsoceles()); // true
  console.log(triangulo1.ehEquilatero()); // false
  console.log(triangulo1.ehEscaleno()); // false
  
  let triangulo2 = new Triangulo(5, 5, 5);
  console.log(triangulo2.ehIsoceles()); // true
  console.log(triangulo2.ehEquilatero()); // true
  console.log(triangulo2.ehEscaleno()); // false
  
  let triangulo3 = new Triangulo(3, 4, 7);
  console.log(triangulo3.ehIsoceles()); // false
  console.log(triangulo3.ehEquilatero()); // false
  console.log(triangulo3.ehEscaleno()); // false