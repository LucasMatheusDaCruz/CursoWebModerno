function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(4.2);
soBoaNoticia(8.9);

function seForVerdadeEuFalo (valor) {
    if (valor){
        console.log('É verdade ... ' + valor);
    }
}

seForVerdadeEuFalo(7.7);
seForVerdadeEuFalo();
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([2,3]);
seForVerdadeEuFalo({});