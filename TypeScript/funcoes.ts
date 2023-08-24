//funções
function addNumber(x:number, y:number):number {
    return x+y;
};

function helloWho(name: string): string {
    return `Hello ${name}`;
}

let soma: number = addNumber(2, 2);
console.log(helloWho("Albérico"));

//funções multi-type
function callToPhone(phone: number | string): string | number  {
    return phone;
};

console.log(callToPhone("1131331111"));

//funções async
async function getDataBase(id:number): Promise<string | number> {
    return "felipe"
};