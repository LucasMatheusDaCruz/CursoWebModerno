function Pessoa() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

new Pessoa