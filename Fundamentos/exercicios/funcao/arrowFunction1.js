let dobro = function(x) {
    return 2 * x
} ;

dobro = (x) => {
    return 2 * x
};

dobro = x => 2 * x // Return implícito
console.log(dobro(Math.PI)); //

let ola = function(){
    return 'Olá'
}

ola = () => 'Ola'

ola = _=> 'Olá'

console.log(ola());