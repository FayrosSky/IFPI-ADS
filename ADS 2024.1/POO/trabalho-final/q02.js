var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UsuarioExistenteException = /** @class */ (function (_super) {
    __extends(UsuarioExistenteException, _super);
    function UsuarioExistenteException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "UsuarioExistenteException";
        return _this;
    }
    return UsuarioExistenteException;
}(Error));
var EmailExistenteException = /** @class */ (function (_super) {
    __extends(EmailExistenteException, _super);
    function EmailExistenteException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "EmailExistenteException";
        return _this;
    }
    return EmailExistenteException;
}(Error));
var IdInvalidoException = /** @class */ (function (_super) {
    __extends(IdInvalidoException, _super);
    function IdInvalidoException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "IdInvalidoException";
        return _this;
    }
    return IdInvalidoException;
}(Error));
var PublicacaoJaReagidaException = /** @class */ (function (_super) {
    __extends(PublicacaoJaReagidaException, _super);
    function PublicacaoJaReagidaException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "PublicacaoJaReagidaException";
        return _this;
    }
    return PublicacaoJaReagidaException;
}(Error));
var Usuario = /** @class */ (function () {
    function Usuario(id_usuario, email) {
        this.id_usuario = id_usuario;
        this.email = email;
    }
    return Usuario;
}());
var Publicacao = /** @class */ (function () {
    function Publicacao(id_publicacao, conteudo, data_criacao) {
        this.id_publicacao = id_publicacao;
        this.conteudo = conteudo;
        this.data_criacao = data_criacao;
    }
    return Publicacao;
}());
var PublicacaoAvancada = /** @class */ (function (_super) {
    __extends(PublicacaoAvancada, _super);
    function PublicacaoAvancada(id_publicacao, conteudo, data_criacao) {
        var _this = _super.call(this, id_publicacao, conteudo, data_criacao) || this;
        _this.reacoes = 0;
        _this.usuarios_reagiram = new Set();
        return _this;
    }
    PublicacaoAvancada.prototype.reagir = function (usuario_id) {
        if (this.usuarios_reagiram.has(usuario_id)) {
            throw new PublicacaoJaReagidaException("Usuário já reagiu a esta publicação.");
        }
        this.reacoes++;
        this.usuarios_reagiram.add(usuario_id);
    };
    return PublicacaoAvancada;
}(Publicacao));
var RedeSocial = /** @class */ (function () {
    function RedeSocial() {
        this.usuarios = new Map();
        this.publicacoes = [];
    }
    RedeSocial.prototype.cadastrarUsuario = function (id_usuario, email) {
        if (this.usuarios.has(id_usuario)) {
            throw new UsuarioExistenteException("Usuário com este ID já existe.");
        }
        if (Array.from(this.usuarios.values()).some(function (u) { return u.email === email; })) {
            throw new EmailExistenteException("Email já cadastrado.");
        }
        this.usuarios.set(id_usuario, new Usuario(id_usuario, email));
    };
    RedeSocial.prototype.cadastrarPublicacao = function (publicacao) {
        this.publicacoes.push(publicacao);
    };
    RedeSocial.prototype.listarPublicacoes = function () {
        return this.publicacoes.sort(function (a, b) { return b.data_criacao.getTime() - a.data_criacao.getTime(); });
    };
    RedeSocial.prototype.listarPublicacoesUsuario = function (email) {
        var usuarioIds = Array.from(this.usuarios.values())
            .filter(function (u) { return u.email === email; })
            .map(function (u) { return u.id_usuario; });
        return this.publicacoes
            .filter(function (p) { return usuarioIds.includes(p.id_publicacao); })
            .sort(function (a, b) { return b.data_criacao.getTime() - a.data_criacao.getTime(); });
    };
    RedeSocial.prototype.reagirPublicacaoAvancada = function (id_publicacao, usuario_id) {
        var publicacao = this.publicacoes.find(function (p) { return p.id_publicacao === id_publicacao; });
        if (publicacao) {
            publicacao.reagir(usuario_id);
        }
        else {
            throw new Error("Publicação não encontrada.");
        }
    };
    return RedeSocial;
}());
// Exemplo de uso
var redeSocial = new RedeSocial();
// Cadastrando usuários
redeSocial.cadastrarUsuario(1, "usuario1@example.com");
redeSocial.cadastrarUsuario(2, "usuario2@example.com");
// Cadastrando publicações
var pub1 = new PublicacaoAvancada(1, "Primeira publicação!", new Date());
redeSocial.cadastrarPublicacao(pub1);
// Listando publicações
redeSocial.listarPublicacoes().forEach(function (pub) {
    console.log("Publica\u00E7\u00E3o: ".concat(pub.conteudo, ", Data: ").concat(pub.data_criacao));
});
// Reagindo a uma publicação
redeSocial.reagirPublicacaoAvancada(1, 1);
console.log("Rea\u00E7\u00F5es na publica\u00E7\u00E3o: ".concat(pub1.reacoes));
