// const a = {name: 'Teste'}

// console.log(a);

// const b = a

// b.name = 'Ops';

// console.log(a);
// console.log(b);

let valor // Não inicializada

console.log(valor);

// console.log(valor2);

valor = null; // Ausência de valor

console.log(valor);

// console.log(valor.toString(2));

const produto = {};
console.log(produto.price);
console.log(produto);

produto.price = 7.2

produto.price = undefined; // Evite atribuir undefined

console.log(!!produto.price);
console.log(produto);


produto.price = null;

console.log(!!produto.price);
console.log(produto);