const alunos = [
    { nome: 'João', nota: 7.9, genero: 'Masculino' },
    { nome: 'Maria', nota: 9.2, genero: 'Feminino' },
    { nome: 'José', nota: 8.5, genero: 'Masculino' },
    { nome: 'Ana', nota: 6.7, genero: 'Feminino' },
    { nome: 'Pedro', nota: 7.3, genero: 'Masculino' }
]

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
const media = total2 / alunos.length

console.log(`Média das notas: ${media}`)

const acimaDaMedia = alunos.filter(aluno => aluno.nota > media)
console.log(`Alunos com nota acima da média: ${acimaDaMedia.map(aluno => aluno.nome)}`)

const nomesEmOrdemAlfabetica = alunos.map(aluno => aluno.nome).sort()
console.log(`Nomes dos alunos em ordem alfabética: ${nomesEmOrdemAlfabetica}`)

const totalDeNotas = alunos.reduce(soma, 0)
console.log(`Total das notas: ${totalDeNotas}`)

const mediaPorGenero = [
    { genero: 'Feminino', media: alunos.filter(aluno => aluno.genero === 'Feminino').map(getNota).reduce(soma) / alunos.filter(aluno => aluno.genero === 'Feminino').length },
    { genero: 'Masculino', media: alunos.filter(aluno => aluno.genero === 'Masculino').map(getNota).reduce(soma) / alunos.filter(aluno => aluno.genero === 'Masculino').length }
]
console.log(`Média das notas por gênero: ${JSON.stringify(mediaPorGenero)}`)
