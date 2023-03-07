function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {min: 7, max: 49}
console.log(rand({max: 77, min: 49}));


console.log(rand(obj));

console.log(rand({min: 777}));

console.log(rand({max: 3}));

console.log(rand({}));