let a = 3;

global.b = 777;

this.c = 456;
this.d = false;
this.e = 'Testing';

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// Criando uma variável sem let e var

abc = 3; // Não faça isso!!!
console.log(global.abc);

// module.exports = { e: 456, f: true, g:testing }