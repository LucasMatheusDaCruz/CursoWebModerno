// Estratégia 1 para gerar padrão

function soma1(a, b, c, d) {
    a = a || 1
    b = b || 1
    c = c || 1
    d = d || 1
    return a + b + c + d
};

console.log(soma1(), soma1(3), soma1(7,8,9), soma1(0, 0, 0));

// Estratégia 2, 3, 4 e 5 para gerar valor padrão
function soma2(a, b, c, d) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c
    d = d ?? 0;
    return a + b + c + d
};

console.log(soma2());
console.log(soma2(), soma2());
console.log(soma2(), soma2(3), soma2(7));
console.log(soma2(), soma2(8));
console.log(soma2(), soma2(9), soma2(9, 9, 9),soma2(0, 0, 0, 0));





// Valor padrão ES2015
function soma3 (a = 1, b = 1, c = 1, d = 1){
    return a + b + c + d
}

console.log(soma3(), soma3(4), soma3(9, 7, 8), soma3(0,0,0,0));

