// par nome/valor
const saudacao = 'opa' // contexto léxico 2

function exec() {
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 98,
    endereco: {
        logradouro: ' Rua Maranguape',
        numero: 222
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)