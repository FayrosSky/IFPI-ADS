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
var MinhaExcecao = /** @class */ (function (_super) {
    __extends(MinhaExcecao, _super);
    function MinhaExcecao(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "MinhaExcecao";
        return _this;
    }
    return MinhaExcecao;
}(Error));
function verificarNumero(num) {
    if (num < 0) {
        throw new MinhaExcecao("Erro: Número negativo não permitido.");
    }
}
try {
    verificarNumero(-5);
}
catch (error) {
    if (error instanceof MinhaExcecao) {
        console.error(error.message);
    }
    else if (error instanceof Error) {
        console.error("Erro:", error.message);
    }
    else {
        console.error("Erro desconhecido:", error);
    }
}
