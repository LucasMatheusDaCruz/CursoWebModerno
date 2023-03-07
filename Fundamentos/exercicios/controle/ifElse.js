const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log("Aprovado!")
    } else { console.log("Reprovado!") }
}

imprimirResultado(10);
imprimirResultado('Epa'); // Cuidados com a tipagem fraca
imprimirResultado(3);
