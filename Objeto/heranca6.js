function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    }
    
    const carro1 = new Carro('Honda', 'Civic', 2022);
    const carro2 = new Carro('Toyota', 'Corolla', 2023);
    console.log(carro1, carro2);
    
    // Simulando o new
    function novo(constructor, ...args) {
    const obj = {};
    obj.proto = constructor.prototype;
    constructor.apply(obj, args);
    return obj;
    }
    
    const carro3 = novo(Carro, 'Chevrolet', 'Onix', 2021);
    const carro4 = novo(Carro, 'Ford', 'Mustang', 2022);
    console.log(carro3, carro4);