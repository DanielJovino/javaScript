let valor // nao inicializado
console.log(valor)

valor = null // aisência de valor 
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preço = 3.50
console.log(produto)

produto.preço = undefined // evite atribuir undefined 
console.log(!!produto.preço)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço 
console.log(!!produto.preco)
console.log(produto)