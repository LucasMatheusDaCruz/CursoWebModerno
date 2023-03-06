const escola = "Cod3r";

console.log(escola.charAt(0));
console.log(escola.charAt(7));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));
console.log(escola.substring(1));
console.log(escola.substring(0,3));
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!" );

console.log(escola.replace(/\w/g, 'y'));
console.log(escola.replace(3, 'e'));
console.log('Ana, Beatrice, Juan'.split(','))  