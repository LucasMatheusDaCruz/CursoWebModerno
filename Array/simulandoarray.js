const quaseArray = { 0: 'João', 1: 'Maria', 2: 'Pedro' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['João', 'Maria', 'Pedro']
console.log(quaseArray.toString(), meuArray)
