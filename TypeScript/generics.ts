//generics <T> consegue tipar uma função que deveria aceitar qualquer tipo de dado
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concant(...itens);
};

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["Albérico", "Eduardo"], ["Alves"])
console.log(numArray);