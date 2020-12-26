function tratarErroELancar( erro ){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem' 
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }   
}

function imprimirNomeGritando (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}

//const obj = { name: 'Roberto'}
const obj = { name: 'Roberto'} // --- com o erro 
imprimirNomeGritando(obj)
