//Esse método é amplamente utilizado em várias linguagens de programação para capturar e tratar exceções que podem ocorrer durante a execução do código.
try {
    var resultado = 10 / 0;
    if (!isFinite(resultado)) {
        throw new Error("Divisão por zero não permitida.");
    }
}
catch (error) {
    if (error instanceof Error) {
        console.error("Erro:", error.message);
    }
    else {
        console.error("Erro desconhecido:", error);
    }
}
