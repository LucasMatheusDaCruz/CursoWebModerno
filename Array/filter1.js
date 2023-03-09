const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
    { nome: 'Máquina de Lavar', preco: 1899, fragil: true },
    { nome: 'Geladeira', preco: 2999, fragil: true },
    { nome: 'Garrafa Térmica', preco: 39.99, fragil: true },
    { nome: 'Panela de Ferro', preco: 199.99, fragil: false }
]


console.log(produtos.filter(function (produto) {
    return false
}))
const isCaro = produto => produto.preco >= 500
const isFragil = produto => produto.fragil

const produtosCarosEFrageis = produtos.filter(isCaro).filter(isFragil)

console.log(produtosCarosEFrageis)


const ordenadoPorPreco = produtos.sort((a, b) => a.preco - b.preco)

console.log(ordenadoPorPreco)


const precosDosFragil = produtos.filter(isFragil).map(produto => produto.preco)
const precoTotalFragil = precosDosFragil.reduce((total, preco) => total + preco, 0)

console.log(`O preço total dos produtos frágeis é R$${precoTotalFragil.toFixed(2)}.`)

const saoTodosFragil = produtos.every(isFragil)

console.log(`Todos os produtos são frágeis? ${saoTodosFragil ? 'Sim' : 'Não'}.`)
