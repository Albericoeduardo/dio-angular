//interfaces (type x interface)
//Type utilizado para tipar objetos
//Interface usado para trabalhar com classes
type robot = {
    readonly id: number | string,
    name: string
};

// X

interface robot2 {
    readonly id: number | string,
    name: string,
    sayHello(): string
};

const bot: robot = {
    id: 1,
    name: 'Albérico'
};

// X

const bot2: robot2 = {
    id: 2,
    name: 'Eduardo',
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

//class e interface
class Pessoa implements robot2 {
    id: string | number;
    name: string;
    sayHello(): string {
        return `Hello ${this.name}`;
    };

    constructor(id: number |string, name: string){
        this.id = id;
        this.name = name;
    }
};

const p = new Pessoa(1, "Albérico");
console.log(p.sayHello());