class Estoque {
    private produtos: (Produto | ProdutoPerecivel)[] = [];

    public inserir(produto: Produto | ProdutoPerecivel): void {
        if (this.consultarPorId(produto.getId()) || this.consultarPorDescricao(produto.getDescricao())) {
            console.log("Produto com mesmo ID ou descrição já existe.");
            return;
        }
        this.produtos.push(produto);
        console.log("Produto inserido com sucesso.");
    }

    public consultarPorId(id: string): Produto | ProdutoPerecivel | undefined {
        return this.produtos.find(produto => produto.getId() === id);
    }

    public consultarPorDescricao(descricao: string): Produto | ProdutoPerecivel | undefined {
        return this.produtos.find(produto => produto.getDescricao() === descricao);
    }

    public excluir(id: string): void {
        const index = this.produtos.findIndex(produto => produto.getId() === id);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log("Produto excluído com sucesso.");
        } else {
            console.log("Produto não encontrado.");
        }
    }

    public repor(id: string, quantidade: number): void {
        const produto = this.consultarPorId(id);
        if (produto) {
            produto.repor(quantidade);
        } else {
            console.log("Produto não encontrado.");
        }
    }

    public darBaixa(id: string, quantidade: number): void {
        const produto = this.consultarPorId(id);
        if (produto) {
            produto.darBaixa(quantidade);
        } else {
            console.log("Produto não encontrado.");
        }
    }
}