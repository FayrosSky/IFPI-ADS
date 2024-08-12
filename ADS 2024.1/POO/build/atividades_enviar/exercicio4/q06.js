"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saudacao = void 0;
class Saudacao {
    constructor(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    obterSaudacao() {
        return `${this.texto}, ${this.destinatario}`;
    }
}
exports.Saudacao = Saudacao;
// Exemplo de uso da classe Saudacao
let saudacao = new Saudacao("Bom dia", "João");
console.log(saudacao.obterSaudacao()); // Saída: "Bom dia, João"
//# sourceMappingURL=q06.js.map