function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 7999.90,
    desc: 0.15,
    getPreco
}

global.preco = 77
global.desc = 0.09
console.log(getPreco())
console.log(produto.getPreco());

const carro = {
    preco: 79999.90,
    desc: 0.07
}


console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.14, '$'))
console.log(getPreco.apply(global, [0.14, '$']))