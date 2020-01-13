'use strict';

let family = {
    name: "John",
    pets: ["Rosie", "Rocky", "Luna"],
    children: {
        zach: { age: 21 },
        allie: { age: 14 }
    },
    job: "Instructor"
}

console.log(family)
console.log(`${Object.keys(family)[0]}: ${family.name} `)
console.log(`${Object.keys(family)[1]}: ${family.pets} `)
console.log(`${Object.keys(family)[2]}: ${Object.keys(family.children)[0]} with age ${family.children.zach.age},${Object.keys(family.children)[1]} with age ${family.children.allie.age}`)
console.log(`${Object.keys(family)[3]}: ${family.job} `)



let petStartWithR = family.pets.filter(val => {
    if (val[0] === 'R') {
        return val;
    }
})
console.log(petStartWithR);

function Person(name, age) {
    this.name = name,
        this.age = age
};
let firstChild = new Person(Object.keys(family.children)[0], family.children.zach.age);
let secondChild = new Person(Object.keys(family.children)[1], family.children.allie.age);

console.log(firstChild, secondChild);

Person.prototype.theirAgeInDogYear = function() {

    return this.age * 7;

}
let arrayOfChildren = [];
arrayOfChildren.push(firstChild.name, firstChild.age, firstChild.theirAgeInDogYear(), secondChild.name, secondChild.age, secondChild.theirAgeInDogYear())
console.log(arrayOfChildren)