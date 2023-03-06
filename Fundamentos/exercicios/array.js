const valores = [7.7, 8.9, 9.2, 10.1, 11.7, 12.6, 2.3] 
console.log(valores[0], valores[3]);
console.log(valores[7]);

valores[4] = 77;
console.log(valores);
console.log(valores.length);


valores.push({id:3}, false, null, 'test');
console.log(valores);
delete valores[7]

console.log(valores.pop());
console.log(valores);

console.log(typeof valores);