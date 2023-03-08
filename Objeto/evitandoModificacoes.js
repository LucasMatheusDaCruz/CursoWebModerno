// Object.preventExtensions
const pessoa = Object.preventExtensions({
    nome: 'João', sobrenome: 'Silva', idade: 30
    });
    console.log('Extensível:', Object.isExtensible(pessoa));
    
    pessoa.nome = 'Maria';
    pessoa.email = 'maria@gmail.com';
    delete pessoa.sobrenome;
    console.log(pessoa);
    
    // Object.seal
    const empresa = { nome: 'FiqOn', segmento: 'Tecnologia', funcionarios: 50 };
    Object.seal(empresa);
    console.log('Selado:', Object.isSealed(empresa));
    
    empresa.endereco = 'Rua do Sol';
    delete empresa.segmento;
    empresa.funcionarios = 100;
    console.log(empresa);
    
    // Object.freeze = selado + valores constantes
    const PI = Object.freeze(3.14159265359);
    console.log(PI);
    
    // tentando modificar o valor de PI
    // PI = 3;
    console.log(PI);