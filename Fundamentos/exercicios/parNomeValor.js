// par nome & valor

const saudacao = 'Olá' // Contexto léxico, escopo.

console.log(saudacao);

function exec() {
    const saudacao = 'Falaaaa'
    return saudacao
}

console.log(exec());


// Objetos são grupos ainhados de pares nome/valor.

const Client = {
    nome: 'Lucas',
    idade: 26,
    peso: 76,
    endereco: {
        logradouro: 'Rua do exemplo',
        numero:777
    }
}

console.log(Client);