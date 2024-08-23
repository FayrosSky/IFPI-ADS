"use strict";
class Estoque {
    constructor() {
        this.produtos = [];
    }
    inserir(produto) {
        if (this.consultarPorId(produto.getId()) || this.consultarPorDescricao(produto.getDescricao())) {
            console.log("Produto com mesmo ID ou descrição já existe.");
            return;
        }
        this.produtos.push(produto);
        console.log("Produto inserido com sucesso.");
    }
    consultarPorId(id) {
        return this.produtos.find(produto => produto.getId() === id);
    }
    consultarPorDescricao(descricao) {
        return this.produtos.find(produto => produto.getDescricao() === descricao);
    }
    excluir(id) {
        const index = this.produtos.findIndex(produto => produto.getId() === id);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log("Produto excluído com sucesso.");
        }
        else {
            console.log("Produto não encontrado.");
        }
    }
    repor(id, quantidade) {
        const produto = this.consultarPorId(id);
        if (produto) {
            produto.repor(quantidade);
        }
        else {
            console.log("Produto não encontrado.");
        }
    }
    darBaixa(id, quantidade) {
        const produto = this.consultarPorId(id);
        if (produto) {
            produto.darBaixa(quantidade);
        }
        else {
            console.log("Produto não encontrado.");
        }
    }
}
//# sourceMappingURL=estoque.js.map