// novo recurso de es2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro:'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i )

const {sobrenome , bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const { endereço : { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep) 
