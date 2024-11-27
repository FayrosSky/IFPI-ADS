# Compiladores 
**1. Problema**   

`` int main(){   

    puts("Hello World!")

} ``

**2.Solução**  

**Compilador:**  
`` Converte código legível para código mais fácil de executar (ex.: tsc. gcc, clang, javac)``

**Interpretador:**  
Recebe o código legível e executa as intruções (ex.: node, python)  

**2.1. Método**  

``É bem difícil ir de texto direto para a saída``

**Solução:** ``Dividir e conquistar``

**Exemplo:** ``Etapas do CLANG(compilador de c/c++)``  
``1. Pré-Processamento``  
``2. Texto para tokens (Tokenização)``
``3. Tokens para AST (Análise Sintática, AST é Abstract Syntax Tree)``  
``4. AST para IR (IR é Representação intermediária)``  
| Coluna 1 | Coluna 2 |
|----------|----------|
| Dado 1   |  Dado 2  |
[test](https://classroom.google.com/w/NjUzNzc3NDQzMzI0/t/all)