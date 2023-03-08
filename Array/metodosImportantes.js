const pilotos = ['Hamilton', 'Bottas', 'Verstappen', 'Perez']
pilotos.pop() // Perez quebrou o carro!
console.log(pilotos)

pilotos.push('Leclerc')
console.log(pilotos)

pilotos.shift() // Remove o primeiro!
console.log(pilotos)

pilotos.unshift('Vettel')
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Alonso', 'Gasly')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Gasly saiu da corrida :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
