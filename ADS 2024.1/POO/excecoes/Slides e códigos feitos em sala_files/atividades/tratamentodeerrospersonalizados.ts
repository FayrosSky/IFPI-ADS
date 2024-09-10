class MinhaExcecao extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MinhaExcecao";
    }
}

function verificarNumero(num: number): void {
    if (num < 0) {
        throw new MinhaExcecao("Erro: Número negativo não permitido.");
    }
}

try {
    verificarNumero(-5);
} catch (error: unknown) {
    if (error instanceof MinhaExcecao) {
        console.error(error.message);
    } else if (error instanceof Error) {
        console.error("Erro:", error.message);
    } else {
        console.error("Erro desconhecido:", error);
    }
}