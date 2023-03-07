function soma (){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2.7, 7,2, 7.8, 8.2, 0.3))

console.log(soma(2.7, 7,2, 7.8, 8.2, 0.3, " Test"))

console.log(soma('a', 'b', 'c', 'd', 'e', 'f', 'g'))