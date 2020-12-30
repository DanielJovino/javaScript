// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pesso -> 456 -> {...}
//pessoa = {nome : 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'  // freeze congela o obj
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria' // não recebe 
console.log(pessoaConstante)


