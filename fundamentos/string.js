const escola = "Cod3r"

console.log(escola.charAt(4)) // para retorna a letra r
console.log(escola.charAt(5)) // para testar 
console.log(escola.charCodeAt(3)) // valor unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola'.concat(escola).concat("!")) // literal é o valor direto que voce usa é o dado sem armazena em uma variavel 
console.log(escola.replace(/\d/, 'e'))
      //console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,Maria,Pedro'.split(','))