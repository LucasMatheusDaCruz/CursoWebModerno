const nomesFemininos = ['Ana', 'Beatriz', 'Carla']
const nomesMasculinos = ['Bruno', 'Carlos', 'Daniel']
const todosNomes = nomesFemininos.concat(nomesMasculinos)

console.log(todosNomes)

const clientesAntigos = [{id: 1, nome: 'João'}, {id: 2, nome: 'Maria'}]
const clientesNovos = [{id: 3, nome: 'Pedro'}, {id: 4, nome: 'Julia'}]
const todosClientes = clientesAntigos.concat(clientesNovos)

console.log(todosClientes)

const numeros1 = [1, 2, 3]
const numeros2 = [4, 5, 6]
const numeros3 = [7, 8, 9]
const todosNumeros = numeros1.concat(numeros2, numeros3)

console.log(todosNumeros)


const valores1 = [1, 'dois', true]
const valores2 = ['três', false, 4]
const todosValores = valores1.concat(valores2)

console.log(todosValores) 

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const todos = [...array1, ...array2]

console.log(todos) 



