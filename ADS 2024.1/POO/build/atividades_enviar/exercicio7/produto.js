"use strict";
class produto {
    constructor(id, descricao, quantidade, valorUnitario) {
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
    }
    getId() {
        return this.id;
    }
    getDescricao() {
        return this.descricao;
    }
    getQuantidade() {
        return this.quantidade;
    }
    getValorUnitario() {
        return this.valorUnitario;
    }
    repor(quantidade) {
        this.quantidade += quantidade;
    }
    darBaixa(quantidade) {
        if (quantidade > this.quantidade) {
            console.log("Quantidade insuficiente para dar baixa.");
        }
        else {
            this.quantidade -= quantidade;
        }
    }
}
//# sourceMappingURL=produto.js.map