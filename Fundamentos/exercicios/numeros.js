const peso1 = 1.0;

const peso2 = Number('2.1');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));


const avaliacao1 = 7.864
const avaliacao2 = 9.8723

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2)); // binário
console.log(typeof media);
console.log(typeof Number);