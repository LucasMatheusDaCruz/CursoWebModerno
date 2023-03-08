// Usando a notação literal

const obj1 = {}

console.log(obj1)

// Object em Javascript
console.log(typeof Object, typeof new Object)

const obj2 = new Object

console.log(obj2)

// Funções construtoras

function Produto(name, price, desc) {
    this.name = name
    this.getPrecoComDesconto = () => {
        return price * (1 - desc)
    }
}

const p1 = new Produto('Caderno', 14.50, 0.2)
const p2 = new Produto('Macbook', 13999.9, 0.20)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Luan', 1700, 13)
const f2 = criarFuncionario('Ataide', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filho = Object.create(null)
filho.nome = 'Lucas'
console.log(filho)

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)