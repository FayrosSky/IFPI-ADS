class produto {
    private id: string;
    private descricao: string;
    private quantidade: number;
    private valorUnitario: number;

    constructor(id: string, descricao: string, quantidade: number, valorUnitario: number){
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
    }

    public getId(): string{
        return this.id;
    }

    public getDescricao(): string{
        return this.descricao
    }

    public getQuantidade(): number {
        return this.quantidade
    }

    public getValorUnitario(): number {
        return this.valorUnitario;
    }

    public repor(quantidade: number): void {
        this.quantidade += quantidade;
    }

    public darBaixa(quantidade: number): void {
        if (quantidade > this.quantidade) {
            console.log("Quantidade insuficiente para dar baixa.")   
        } else {
            this.quantidade -= quantidade;
        }
    }

}