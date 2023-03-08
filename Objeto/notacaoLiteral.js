const x = 1
const y = 2
const z = 3

const objA = { a: x, b: y, c: z }
const objB = { a: x, b: y, c: z }
console.log(objA, objB)

const nomeProp = 'Nota'
const valorProp = 9.7

const objC = {}
objC[nomeProp] = valorProp
console.log(objC)

const objD = {[nomeProp]: valorProp}
console.log(objD)

const objE = {
    funcao1: function() {
        // ...
    },
    funcao2() {
        // ...
    }
}
console.log(objE)
