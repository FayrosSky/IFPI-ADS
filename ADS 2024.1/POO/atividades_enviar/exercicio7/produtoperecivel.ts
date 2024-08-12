// ProdutoPerecivel.ts
class ProdutoPerecivel extends produto {
    private dataValidade: Date;

    constructor(id: string, descricao: string, quantidade: number, valorUnitario: number, dataValidade: Date) {
        super(id, descricao, quantidade, valorUnitario);
        this.dataValidade = dataValidade;
    }

    public isValido(): boolean {
        const hoje = new Date();
        return hoje <= this.dataValidade;
    }

    public repor(quantidade: number): void {
        if (!this.isValido()) {
            console.log("Não é possível repor. O produto está fora da validade.");
            return;
        }
        super.repor(quantidade);
    }

    public darBaixa(quantidade: number): void {
        if (!this.isValido()) {
            console.log("Não é possível dar baixa. O produto está fora da validade.");
            return;
        }
        super.darBaixa(quantidade);
    }
}
