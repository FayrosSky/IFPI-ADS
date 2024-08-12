"use strict";
let string = "respondendo a questão";
let numero = 7;
let logico = true;
let numeros = [1, 2, 3, 4, 5, 6];
let nomes = ["davyd", "davyson", "ln"];
let endereco = ["PI", "Teresina", "santo antonio", "vamos ver o sol", "Arquelau Siqueira", 28, 14];
var Marca_Carro;
(function (Marca_Carro) {
    Marca_Carro[Marca_Carro["Fiat"] = 0] = "Fiat";
    Marca_Carro[Marca_Carro["Chevrolet"] = 1] = "Chevrolet";
    Marca_Carro[Marca_Carro["Volkswagem"] = 2] = "Volkswagem";
})(Marca_Carro || (Marca_Carro = {}));
;
let m = Marca_Carro.Fiat;
