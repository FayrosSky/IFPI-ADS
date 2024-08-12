function cumprimentarPessoa(nome, tratamento) {
    if (tratamento === void 0) { tratamento = "Sr."; }
    console.log("".concat(tratamento, ". ").concat(nome));
}
cumprimentarPessoa("Sávia"); // Saída: Sr. Sávia
cumprimentarPessoa("João", "Dr."); // Saída: Dr. João
