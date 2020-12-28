const notas = [7.7 , 6.5, 5.2, 8.9, 3.4, 7.1, 9.0]

//Sem callback
let notasBaixas= []
for(let i in notas) {
    if(notas[i] < 7) {
    notasBaixas.push(notas[i]) 
   }
}

console.log(notasBaixas)

//COm callback
const notasBaixas2 = notas.filter(function(nota){
    return nota <7
})
 
console.log(notasBaixas2)