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
var TipoInteracao;
(function (TipoInteracao) {
    TipoInteracao["Curtir"] = "curtir";
    TipoInteracao["NaoCurtir"] = "n\u00E3o curtir";
    TipoInteracao["Riso"] = "riso";
    TipoInteracao["Surpresa"] = "surpresa";
})(TipoInteracao || (TipoInteracao = {}));
var Usuario = /** @class */ (function () {
    function Usuario(id, email, apelido, documento) {
        this.id = id;
        this.email = email;
        this.apelido = apelido;
        this.documento = documento;
    }
    Usuario.prototype.getId = function () {
        return this.id;
    };
    Usuario.prototype.getEmail = function () {
        return this.email;
    };
    Usuario.prototype.getApelido = function () {
        return this.apelido;
    };
    Usuario.prototype.getDocumento = function () {
        return this.documento;
    };
    return Usuario;
}());
var Publicacao = /** @class */ (function () {
    function Publicacao(id, usuario, conteudo, dataHora) {
        this.id = id;
        this.usuario = usuario;
        this.conteudo = conteudo;
        this.dataHora = dataHora;
    }
    Publicacao.prototype.getId = function () {
        return this.id;
    };
    Publicacao.prototype.getUsuario = function () {
        return this.usuario;
    };
    Publicacao.prototype.getConteudo = function () {
        return this.conteudo;
    };
    Publicacao.prototype.getDataHora = function () {
        return this.dataHora;
    };
    return Publicacao;
}());
var Interacao = /** @class */ (function () {
    function Interacao(id, publicacao, tipoInteracao, usuario, dataHora) {
        this.id = id;
        this.publicacao = publicacao;
        this.tipoInteracao = tipoInteracao;
        this.usuario = usuario;
        this.dataHora = dataHora;
    }
    Interacao.prototype.getId = function () {
        return this.id;
    };
    Interacao.prototype.getPublicacao = function () {
        return this.publicacao;
    };
    Interacao.prototype.getTipoInteracao = function () {
        return this.tipoInteracao;
    };
    Interacao.prototype.getUsuario = function () {
        return this.usuario;
    };
    Interacao.prototype.getDataHora = function () {
        return this.dataHora;
    };
    return Interacao;
}());
var PublicacaoAvancada = /** @class */ (function (_super) {
    __extends(PublicacaoAvancada, _super);
    function PublicacaoAvancada(id, usuario, conteudo, dataHora) {
        var _this = _super.call(this, id, usuario, conteudo, dataHora) || this;
        _this.interacoes = [];
        return _this;
    }
    PublicacaoAvancada.prototype.adicionarInteracao = function (interacao) {
        this.interacoes.push(interacao);
    };
    PublicacaoAvancada.prototype.getInteracoes = function () {
        return this.interacoes;
    };
    return PublicacaoAvancada;
}(Publicacao));
