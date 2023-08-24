//Tipos primitivos: boolean, number, string    
  let ligado: boolean = false;
  let nome: string = "Albérico";
  let idade: number = 21;
  let altura: number = 1.70;

//Tipos especiais: null e undefined
  let nulo: null = null;
  let indefinido: undefined = undefined;

//tipos abrangentes: any e void
  let qualquer: any = 6;
  let qualquerCoisa: any = "Albérico";
  let retorno: void
  function executaQuery(): void {
    //query
  }

//objeto - sem presivibilidade
  let produto: object = {
    name: "Albérico",
    cidade: "Palmas"
  };

//objeto - com previsibilidade
type ProdutoLoja = {
    nomeProduto: string,
    preco: number,
    unidades: number
};

let meuProduto: ProdutoLoja = {
    nomeProduto: "Tenis",
    preco: 89.99,
    unidades: 5
};

//arrays
let dados: string[] = ["Albérico", "Eduardo", "Alves"];
let dados2: Array<string> = [];

//multi-type array
let infos: (string | number)[] = ["Albérico", 21];

//tuplas
let boleto:[string, number, number] = ["agua", 100, 124241356];

//datas
let aniversario:Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());