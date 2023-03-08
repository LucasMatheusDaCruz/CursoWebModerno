const produtos = [
    { nome: "Borracha", preco: 3.45, categoria: "Papelaria" },
    { nome: "Caderno", preco: 13.90, categoria: "Papelaria" },
    { nome: "Kit de Lápis", preco: 41.22, categoria: "Papelaria" },
    { nome: "Caneta", preco: 7.50, categoria: "Papelaria" },
    { nome: "Maçã", preco: 1.50, categoria: "Alimentos" },
    { nome: "Pão de Forma", preco: 5.50, categoria: "Alimentos" },
    { nome: "Leite Integral", preco: 3.20, categoria: "Alimentos" }
];
const apenasProdutosPapelaria = produtos
    .filter(function (produto) {
        return produto.categoria === "Papelaria";
    })
    .map(function (produto) {
        return produto.nome;
    });

console.log(apenasProdutosPapelaria);
const precoTotalProdutosPapelaria = produtos
    .filter(function (produto) {
        return produto.categoria === "Papelaria";
    })
    .map(function (produto) {
        return produto.preco;
    })
    .reduce(function (acumulador, preco) {
        return acumulador + preco;
    }, 0);

console.log(precoTotalProdutosPapelaria);
const produtosOrdenadosPorPreco = produtos
    .sort(function (produto1, produto2) {
        return produto1.preco - produto2.preco;
    })
    .map(function (produto) {
        return produto.nome;
    });

console.log(produtosOrdenadosPorPreco);



const precosProdutosPapelaria = produtos
    .filter(function (produto) {
        return produto.categoria === "Papelaria";
    })
    .map(function (produto) {
        return produto.preco;
    });

console.log(precosProdutosPapelaria);



const produtosComPrecoString = produtos.map(function(produto) {
    return `O ${produto.nome} custa R$ ${produto.preco.toFixed(2)}`;
  });
  
  console.log(produtosComPrecoString);
  

  const produtosComPrecoStringECategoria = produtos.map(function(produto) {
    return `O ${produto.nome} custa R$ ${produto.preco.toFixed(2)} e pertence a categoria ${produto.categoria}`;
  });
  
  console.log(produtosComPrecoStringECategoria);

  