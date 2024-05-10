class User {
    constructor(firstName, lastName, email, cep, rua, numero, bairro, cidade, estado) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.cep = cep
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    get nome() {
        return `${this.firstName} ${this.lastName}`
    }

    cadastrar () {
        id = 1
        console.log(id)
    }
}

module.exports = User