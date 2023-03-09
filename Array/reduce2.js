const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }]


 const todosBolsistas = alunos.reduce(function(acumulador, aluno) {
    return acumulador && aluno.bolsista
    }, true)

console.log(todosBolsistas)


const algumBolsista = alunos.reduce(function(acumulador, aluno) {
    return acumulador || aluno.bolsista
    }, false)


console.log(algumBolsista)


alunos.push({ nome: 'Lucas', nota: 5.5, bolsista: true })
alunos.push({ nome: 'Fernanda', nota: 8.9, bolsista: false })

console.log(algumBolsista)
console.log(todosBolsistas)


const bolsistas = alunos.reduce((acumulador, atual) => {
    if (atual.bolsista) {
        acumulador.push(atual.nome)
    }
    return acumulador
}, [])

const naoBolsistas = alunos.reduce((acumulador, atual) => {
    if (!atual.bolsista) {
        acumulador.push(atual.nome)
    }
    return acumulador
}, [])

console.log(`Bolsistas: ${bolsistas}`)
console.log(`Não bolsistas: ${naoBolsistas}`)