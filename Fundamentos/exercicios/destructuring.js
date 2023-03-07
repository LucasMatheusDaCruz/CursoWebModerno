// Novo recurso ES6 2015

const person = {
    name: 'Lucas',
    age: 26,
    adress: {
        street: '42st street',
        number: 777
    }
}

const { name, age } = person;
console.log(name, age);

const { name: n, age: a } = person;

console.log(n, a)

console.log(person);

const { surName, humor = true } = person;

console.log(surName, humor);

const { adress: { street, number, postalCode } } = person;

console.log(street, number, postalCode);