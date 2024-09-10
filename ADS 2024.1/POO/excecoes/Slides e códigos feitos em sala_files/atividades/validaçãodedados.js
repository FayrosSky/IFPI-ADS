function calcularIdade(anoNascimento) {
    if (typeof anoNascimento !== 'number' || anoNascimento < 1900 || anoNascimento > new Date().getFullYear()) {
        throw new Error("Ano de nascimento inválido.");
    }
    return new Date().getFullYear() - anoNascimento;
}
try {
    console.log(calcularIdade(2000)); //saída: 24
    console.log(calcularIdade(-2000)); //gera  erro
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("Erro desconhecido:", error);
    }
}
