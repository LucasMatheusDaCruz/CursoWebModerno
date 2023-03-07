// Função em Javascript é First-Class Object (Citizens)

// High-order function

// Criando de forma literal

function fun1() {

}


// Armazenar função em uma variável

const fun2 = function() {

};

// Armazenar função em um array

const array = [function(a, b) { return a + b; }, fun1, fun2];


console.log(array[0](2,3));


// Armazenar função em um atributo de objeto

const obj = {};
obj.falar = function() { return "Olá"; };
console.log(obj.falar());


// Passar função como parâmetro

function run(fun){
    fun(    )
}

run(function(){console.log('Executando .... ')})


// Uma função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}

soma(2, 3)(7)

const cincoMais = soma(2, 3)
cincoMais(7)