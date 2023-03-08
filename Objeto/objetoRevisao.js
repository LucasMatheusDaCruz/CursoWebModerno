// Coleção dinãmica de pares chave/valor
const produto = new Object();
produto.name = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
produto.price = 770

console.log(produto)
delete produto.price
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89900,
    proprietario: {
        nome: 'Lucas',
        idade: 26,
        endereco: {
            logradouro: 'Rua do Exemplo',
            numero: 777
        }
    },
    condutores: [
        {
            nome: 'Juliane',
            idade: 21
        }, {
            nome: 'Lucas',
            idade: 26
        },
        {
            nome: 'Luan',
            idade: 23
        }
    ],
    calcularValorSeguro: function () {
        const seguros = {};
        for (let i = 0; i < this.condutores.length; i++) {
            let motorista = this.condutores[i];
            let idade = motorista.idade;
            let valorSeguro = this.valor * 0.05;
            if (idade < 25) {
                valorSeguro *= 1.1;
            }
            seguros[motorista.nome] = valorSeguro;
        }

        return seguros;
    }
};

const seguros = carro.calcularValorSeguro();
console.log(seguros.Lucas);
console.log(seguros.Juliane);
console.log(seguros.Luan);



