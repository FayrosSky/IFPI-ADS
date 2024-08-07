"use strict";
class Postagem {
    constructor(id, texto) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0;
    }
    curtir() {
        this.quantidadeCurtidas++;
    }
    toString() {
        return `Postagem ${this.id}: "${this.texto}" (${this.quantidadeCurtidas} curtidas)`;
    }
}
class Microblog {
    constructor() {
        this.postagens = [];
    }
    adicionarPostagem(postagem) {
        this.postagens.push(postagem);
    }
    excluirPostagem(id) {
        this.postagens = this.postagens.filter((p) => p.id !== id);
    }
    obterPostagemMaisCurtida() {
        if (this.postagens.length === 0) {
            return null;
        }
        return this.postagens.reduce((maisCurtida, postagem) => postagem.quantidadeCurtidas > maisCurtida.quantidadeCurtidas
            ? postagem
            : maisCurtida);
    }
    curtir(id) {
        const postagem = this.postagens.find((p) => p.id === id);
        if (postagem) {
            postagem.curtir();
        }
    }
    toString() {
        return this.postagens.map((p) => p.toString()).join("\n");
    }
}
// Exemplo de uso
const microblog = new Microblog();
const postagem1 = new Postagem(1, "Olá, mundo!");
const postagem2 = new Postagem(2, "Essa é minha segunda postagem.");
const postagem3 = new Postagem(3, "Curtam essa postagem!");
microblog.adicionarPostagem(postagem1);
microblog.adicionarPostagem(postagem2);
microblog.adicionarPostagem(postagem3);
microblog.curtir(1);
microblog.curtir(1);
microblog.curtir(3);
microblog.curtir(3);
microblog.curtir(3);
console.log(microblog.toString());
// Saída:
// Postagem 1: "Olá, mundo!" (2 curtidas)
// Postagem 2: "Essa é minha segunda postagem." (0 curtidas)
// Postagem 3: "Curtam essa postagem!" (3 curtidas)
const maisCurtida = microblog.obterPostagemMaisCurtida();
console.log(maisCurtida
    ? `A postagem mais curtida é: ${maisCurtida.toString()}`
    : "Não há postagens no microblog.");
// Saída: A postagem mais curtida é: Postagem 3: "Curtam essa postagem!" (3 curtidas)
microblog.excluirPostagem(2);
console.log(microblog.toString());
// Saída:
// Postagem 1: "Olá, mundo!" (2 curtidas)
// Postagem 3: "Curtam essa postagem!" (3 curtidas)
//# sourceMappingURL=q02.js.map