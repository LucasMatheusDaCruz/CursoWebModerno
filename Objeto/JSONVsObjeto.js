const pessoa = {
    nome: 'João',
    idade: 30,
    email: 'joao@gmail.com',
    ativo: true,
    endereco: {
        rua: 'Rua dos Exemplos',
        numero: 0,
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP'
    },
    hobbies: ['ler', 'viajar', 'cozinhar']
};

console.log(JSON.stringify(pessoa));

const json = '{"nome":"Maria","idade":25,"email":"maria@gmail.com","ativo":false,"endereco":{"rua":"Rua das Flores","numero":100,"bairro":"Vila Nova","cidade":"Belo Horizonte","estado":"MG"},"hobbies":["correr","jogar futebol"]}';

const maria = JSON.parse(json);
console.log(maria);