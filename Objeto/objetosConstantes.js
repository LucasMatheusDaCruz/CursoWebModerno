// Pessoa -> 123 -> {...}

const pessoa = { nome: 'Lucas' }

pessoa.nome = 'Luan'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Marta'
pessoa.endereco = 'Rua do Exemplo'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Lucas' })
pessoaConstante.nome = 'Matheus'
console.log(pessoaConstante)