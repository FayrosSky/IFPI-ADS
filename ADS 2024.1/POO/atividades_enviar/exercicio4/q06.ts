export class Saudacao {
    texto: string;
    destinatario: string;
  
    constructor(texto: string, destinatario: string) {
      this.texto = texto;
      this.destinatario = destinatario;
    }
  
    obterSaudacao(): string {
      return `${this.texto}, ${this.destinatario}`;
    }
  }
  
  // Exemplo de uso da classe Saudacao
  let saudacao = new Saudacao("Bom dia", "João");
  console.log(saudacao.obterSaudacao()); // Saída: "Bom dia, João"