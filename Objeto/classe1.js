class Transacao {
    constructor(descricao = 'Genérica', valor = 0, tipo = 'Despesa') {
        this.descricao = descricao
        this.valor = valor
        this.tipo = tipo
    }
}

class CicloContabil {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.transacoes = []
    }
    addTransacoes(...transacoes) {
        transacoes.forEach(t => this.transacoes.push(t))
    }

    saldo() {
        let saldoAtual = 0
        this.transacoes.forEach(t => {
            if (t.tipo === 'Receita') {
                saldoAtual += t.valor
            } else {
                saldoAtual -= t.valor
            }
        })
        return saldoAtual
    }
}

const pagamento = new Transacao('Pagamento do cliente', 8000, 'Receita')
const compra = new Transacao('Compra de equipamentos', 5000)

const contabilidade = new CicloContabil(2, 2022)
contabilidade.addTransacoes(pagamento, compra)
console.log(contabilidade)
console.log(contabilidade.saldo())
