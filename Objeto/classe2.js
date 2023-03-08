class Pessoa {
    constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
    }
    }
    
    class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
    super(nome, idade)
    this.matricula = matricula
    }
    }
    
    class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
    super(nome, idade)
    this.disciplina = disciplina
    }
    }
    class Turma {
    constructor(curso, professor, ...alunos) {
    this.curso = curso
    this.professor = professor
    this.alunos = alunos
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno)
    }
    
    listaAlunos() {
        console.log('Lista de alunos da turma:')
        this.alunos.forEach(aluno => console.log(aluno.nome))
    }
    }
    
    const aluno1 = new Aluno('João', 20, 123)
    const aluno2 = new Aluno('Maria', 19, 456)
    const professor = new Professor('José', 35, 'Matemática')
    
    const turma1 = new Turma('Cálculo', professor, aluno1, aluno2)
    turma1.adicionarAluno(new Aluno('Carlos', 21, 789))
    
    turma1.listaAlunos()