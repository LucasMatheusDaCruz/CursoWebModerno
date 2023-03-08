const frutas = ['Maçã', 'Banana', 'Abacaxi', 'Pêra']

frutas.forEach(function(fruta, indice) {
console.log(`${indice + 1}) ${fruta}`)
})

frutas.forEach(fruta => console.log(fruta))

const exibirFruta = fruta => console.log(fruta)
frutas.forEach(exibirFruta)