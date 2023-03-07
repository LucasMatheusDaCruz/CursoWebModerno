const notas = [7.7, 9.2, 4.2, 7.2, 8.2, 2.5, 2.8, 7.1];

// Sem callback

let notasBaixas = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }}

console.log(notasBaixas);


// Com callback

notasAltas = notas.filter(function(nota) {
    return nota > 7
})

console.log(notasAltas);


const notasExemplares = notas.filter(nota => nota > 9)

console.log(notasExemplares);