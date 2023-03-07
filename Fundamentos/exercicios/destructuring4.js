function rand (min = 0, max = 999) {
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand((40, 20)))
console.log(rand((777)))
console.log(rand(1))
console.log(rand())