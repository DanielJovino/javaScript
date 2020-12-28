function Carro (velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelera = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else{
            velocidaAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.geVelocidadeAtual = function () {
        return velocidadeAtual
   }
}

const uno = new Carro
uno.acelera()
console.log(uno.geVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelera()
ferrari.acelera()
ferrari.acelera()
console.log(ferrari.geVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)