//data modifiers: public, private, protected
//public: comportamento normal
//private: so pode ser acessada de dentro da classe
//protected: so pode ser enxergado de dentro da classe e de subclasses
class Character {
    private name: string
    protected readonly strength: number
    protected readonly skill: number

    constructor (name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    public attack(): void {
        console.log(`Attack with ${this.strength} points`)
    }
}


//subclass
class Magician extends Character {
    magicPoint: number
    
    constructor(
        name: string, 
        strength: number, 
        skill: number, 
        magicPoint: number
        ){
            super(name, strength, skill);
            this.magicPoint = magicPoint;
        }
    }

const p1 = new Character("Albérico", 10, 99);
console.log(p1);
p1.attack();

const p2 = new Magician("Eduardo", 2, 99, 50);
console.log(p1);
p1.attack();