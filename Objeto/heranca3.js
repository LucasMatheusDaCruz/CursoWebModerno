const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filho1 = Object.create(pai)
filho1.nome = 'Lucas'
filho1.sexo = 'Masculino'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome: { value: 'Luan', writable: false, enumerable: true },
    sexo: { value: 'Masculino', writable: false, enumerable: true }
})

const filha = Object.create(pai, {
    nome: { value: 'Juliane', writable: false, enumerable: true },
    sexo: { value: 'Feminino', writable: false, enumerable: true }
})

console.log(filha.nome)
filha.nome = 'Juliana'
console.log(`${filha.nome} tem cabelo ${filha.corCabelo} e é do sexo ${filha.sexo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))
console.log(Object.keys(filha))

for(let key in filha) {
    filha.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
