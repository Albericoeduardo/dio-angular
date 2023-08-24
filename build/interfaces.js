"use strict";
;
const bot = {
    id: 1,
    name: 'Albérico'
};
// X
const bot2 = {
    id: 2,
    name: 'Eduardo',
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
//class e interface
class Pessoa {
    sayHello() {
        return `Hello ${this.name}`;
    }
    ;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
;
const p = new Pessoa(1, "Albérico");
console.log(p.sayHello());
