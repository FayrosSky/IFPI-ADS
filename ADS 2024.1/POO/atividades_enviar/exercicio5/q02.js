var Postagem = /** @class */ (function () {
    function Postagem(id, texto) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0;
    }
    Postagem.prototype.curtir = function () {
        this.quantidadeCurtidas++;
    };
    Postagem.prototype.toString = function () {
        return "Postagem ".concat(this.id, ": \"").concat(this.texto, "\" (").concat(this.quantidadeCurtidas, " curtidas)");
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.postagens = [];
    }
    Microblog.prototype.adicionarPostagem = function (postagem) {
        this.postagens.push(postagem);
    };
    Microblog.prototype.excluirPostagem = function (id) {
        this.postagens = this.postagens.filter(function (p) { return p.id !== id; });
    };
    Microblog.prototype.obterPostagemMaisCurtida = function () {
        if (this.postagens.length === 0) {
            return null;
        }
        return this.postagens.reduce(function (maisCurtida, postagem) {
            return postagem.quantidadeCurtidas > maisCurtida.quantidadeCurtidas
                ? postagem
                : maisCurtida;
        });
    };
    Microblog.prototype.curtir = function (id) {
        var postagem = this.postagens.find(function (p) { return p.id === id; });
        if (postagem) {
            postagem.curtir();
        }
    };
    Microblog.prototype.toString = function () {
        return this.postagens.map(function (p) { return p.toString(); }).join("\n");
    };
    return Microblog;
}());
// Exemplo de uso
var microblog = new Microblog();
var postagem1 = new Postagem(1, "Olá, mundo!");
var postagem2 = new Postagem(2, "Essa é minha segunda postagem.");
var postagem3 = new Postagem(3, "Curtam essa postagem!");
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
var maisCurtida = microblog.obterPostagemMaisCurtida();
console.log(maisCurtida
    ? "A postagem mais curtida \u00E9: ".concat(maisCurtida.toString())
    : "Não há postagens no microblog.");
// Saída: A postagem mais curtida é: Postagem 3: "Curtam essa postagem!" (3 curtidas)
microblog.excluirPostagem(2);
console.log(microblog.toString());
// Saída:
// Postagem 1: "Olá, mundo!" (2 curtidas)
// Postagem 3: "Curtam essa postagem!" (3 curtidas)
