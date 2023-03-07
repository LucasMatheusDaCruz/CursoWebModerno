const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao);
    }
}

 pessoa.falar()
 const falar =  pessoa.falar // Conflito entre paradigmas: funcional e orientado a objeto
 falar()

 const falarDePessoa = pessoa.falar.bind(pessoa);
 falarDePessoa()