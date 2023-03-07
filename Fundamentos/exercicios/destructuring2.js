const [a] = [7];

console.log(a);

const [n1, n2, n3, n4, n5, n6 = 0] = [10, 7, 11, 12, 13, 14, 15, 16, 17, 18];

console.log(n1, n2, n3, n4);

const [, [, nota]] = [,[, 7, 11, 12, 13, 14, 15, 16, 17, 18]]
console.log(nota);