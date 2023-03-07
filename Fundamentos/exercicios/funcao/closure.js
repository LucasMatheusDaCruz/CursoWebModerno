// Clousure é o escopo criado quando a função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função

// Contexto léxico em ação!

const y = 'Global';

function fora (){
    const y = 'Local';
    function dentro(){
        return y
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao());