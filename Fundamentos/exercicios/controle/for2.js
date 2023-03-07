const notas = [6.7, 6.8, 5.8, 7.7, 8.5, 9.2]

for (let i in notas) {
    console.log(i, notas[i])
}


const pessoa = {
    name: 'Lucas',
    lastname: 'Da Cruz',
    age: 26,
    weight: 76
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

