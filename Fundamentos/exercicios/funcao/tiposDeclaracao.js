// Function declaration

console.log(soma(2, 5))
function soma(a, z) {
    return a + z
}

// Function expression



const sub = function (a, z) {
    return a - z
}
console.log(sub(420, 343))
// Named function expression = Expresões não sofrem Hoisting

const mult = function mult(a, z) {
    return a * z
}

console.log(mult(7, 7))

