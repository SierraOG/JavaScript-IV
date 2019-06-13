/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor (attributes){
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }

    destroy(){
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor (attributes) {
        super(attributes);
        this.healthPoints = attributes.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage`;
    }
}

class Humanoid extends CharacterStats{
    constructor(attributes){
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
    'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
    'Giant Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
    'Bow',
    'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.



class Hero extends Humanoid{
    constructor(attributes){
        super(attributes);
        this.attackPoints = attributes.attackPoints;
        this.nemesis = attributes.nemesis;
    }
    doJustice(){
        this.nemesis.healthPoints -= this.attackPoints;
        if (this.nemesis.healthPoints <= 0){
            return this.nemesis.destroy();
        }
        else{
            return `${this.name} does damage to villain ${this.nemesis.name}.`;
        }
    }
}

class Villain extends Humanoid{
    constructor(attributes){
        super(attributes);
        this.nemesis = attributes.nemesis;
        this.attackPoints = attributes.attackPoints;
    }
    doEvil(){
        this.nemesis.healthPoints -= this.attackPoints;
        if (this.nemesis.healthPoints <= 0){
            return this.nemesis.destroy();
        }
        else{
            return `${this.name} does damage to hero ${this.nemesis.name}.`;
        }
    }
}

const heroPaladin = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 1,
        height: 2,
    },
    healthPoints: 7,
    name: 'Brea',
    team: 'Oathbreaker',
    weapons: [
        'Two Handed Sword',
    ],
    language: 'Common Tongue',
    attackPoints: 4,
});

const villainDruid = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 3,
        height: 2,
    },
    healthPoints: 10,
    name: 'Ivybeard',
    team: 'Spores',
    weapons: [
        'Dagger',
        'sickle',
    ],
    language: 'Common Tongue',
    nemesis: heroPaladin,
    attackPoints: 3,
});

heroPaladin.nemesis = villainDruid;

console.log(villainDruid.doEvil());
console.log(heroPaladin.doJustice());
console.log(villainDruid.doEvil());
console.log(heroPaladin.doJustice());
console.log(heroPaladin.doJustice());