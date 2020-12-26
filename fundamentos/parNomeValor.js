// par nome/valor
const saudacao = 'opa' // contexto léxico 

function exec () {
    const saudacao = 'Falaa' // contexto lexico 2
    return saudacao
}

// Objeto são grupos aninhados de pares nome/valor 
const cliente = {
    nome: 'Pedro',
    idade: 32 ,
    peso: 90,
    endereço : {
        logradouro :'Rua Muito Legal ',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)