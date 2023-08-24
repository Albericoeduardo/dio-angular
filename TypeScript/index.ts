type heroi = {
    name: string,
    vulgo: string,
};

function printaObjetos(pessoa: heroi) {
    console.log(pessoa)
}

console.log("Olá, mudno")

printaObjetos({
    name: "Bruce Wayne",
    vulgo: "batman"
})