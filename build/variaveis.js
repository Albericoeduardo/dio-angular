"use strict";
//Tipos primitivos: boolean, number, string    
let ligado = false;
let nome = "Albérico";
let idade = 21;
let altura = 1.70;
//Tipos especiais: null e undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any e void
let qualquer = 6;
let qualquerCoisa = "Albérico";
let retorno;
function executaQuery() {
    //query
}
//objeto - sem presivibilidade
let produto = {
    name: "Albérico",
    cidade: "Palmas"
};
let meuProduto = {
    nomeProduto: "Tenis",
    preco: 89.99,
    unidades: 5
};
//arrays
let dados = ["Albérico", "Eduardo", "Alves"];
let dados2 = [];
//multi-type array
let infos = ["Albérico", 21];
//tuplas
let boleto = ["agua", 100, 124241356];
//datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
