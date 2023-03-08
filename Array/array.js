console.log(typeof Array, typeof new Array(), typeof [])

let aprovados = ['João', 'Mariana', 'Pedro']
console.log(aprovados)

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paula'
aprovados.push('Gustavo')
console.log(aprovados.length)

aprovados[9] = 'Maria'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['João', 'Mariana', 'Pedro']
aprovados.splice(1, 1)
console.log(aprovados)
