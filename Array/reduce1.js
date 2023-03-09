const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const aprovados = alunos.filter(a => a.nota >= 8)
console.log(aprovados)

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)
const todosBolsistas = alunos.map(a => a.bolsista).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador && atual
}, true)

console.log(todosBolsistas)

const algumBolsista = alunos.map(a => a.bolsista).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador || atual
}, false)

console.log(algumBolsista)
const bolsistas = alunos.filter(a => a.bolsista)
const mediaBolsistas = bolsistas.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) / bolsistas.length

console.log(mediaBolsistas)
alunos.push({ nome: 'Lucas', nota: 5.5, bolsista: true })
alunos.push({ nome: 'Fernanda', nota: 8.9, bolsista: false })
console.log(alunos)
console.log(mediaBolsistas)
