function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
} 

console.log(criarProduto('Macbook', 13999.99))
console.log(criarProduto('Ipad', 8999.99))