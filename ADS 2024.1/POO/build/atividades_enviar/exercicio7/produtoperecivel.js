"use strict";
// ProdutoPerecivel.ts
class ProdutoPerecivel extends produto {
    constructor(id, descricao, quantidade, valorUnitario, dataValidade) {
        super(id, descricao, quantidade, valorUnitario);
        this.dataValidade = dataValidade;
    }
    isValido() {
        const hoje = new Date();
        return hoje <= this.dataValidade;
    }
    repor(quantidade) {
        if (!this.isValido()) {
            console.log("Não é possível repor. O produto está fora da validade.");
            return;
        }
        super.repor(quantidade);
    }
    darBaixa(quantidade) {
        if (!this.isValido()) {
            console.log("Não é possível dar baixa. O produto está fora da validade.");
            return;
        }
        super.darBaixa(quantidade);
    }
}
//# sourceMappingURL=produtoperecivel.js.map