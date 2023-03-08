const nums = [1, 2, 3, 4, 5];
let resultado1 = nums.map(function(num) {
    return num * 2;
});

console.log(resultado1);

let resultado2 = nums.map(function(num) {
    return num + 10;
});

console.log(resultado2);
let resultado3 = nums.map(function(num) {
    if (num % 2 === 0) {
        return `${num} é par`;
    } else {
        return `${num} é ímpar`;
    }
});

console.log(resultado3);
let resultado4 = nums.map(function(num) {
    return `Valor: ${String(num)}`;
});

console.log(resultado4);
