class Equipamento {
    private ligado: boolean;
  
    constructor() {
      this.ligado = false;
    }
  
    liga(): void {
      if (!this.ligado) {
        this.ligado = true;
        console.log("Equipamento ligado.");
      } else {
        console.log("Equipamento já está ligado.");
      }
    }
  
    desliga(): void {
      if (this.ligado) {
        this.ligado = false;
        console.log("Equipamento desligado.");
      } else {
        console.log("Equipamento já está desligado.");
      }
    }
  
    inverte(): void {
      this.ligado = !this.ligado;
      console.log(
        this.ligado
          ? "Equipamento ligado."
          : "Equipamento desligado."
      );
    }
  
    estaLigado(): boolean {
      return this.ligado;
    }
  }
  
  // Exemplo de uso da classe Equipamento
  let equipamento = new Equipamento();
  
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