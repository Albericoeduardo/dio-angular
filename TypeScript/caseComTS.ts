type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
};

function ligarPara(heroi: Hero) {
    console.log("Ligando para: " + heroi.telefone)
};

ligarPara({
    nome: "Steve Rogers",
    vulgo: "Capitão América",
    telefone: "11 31713388"
});