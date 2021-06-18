//Armazenando uma função em uma variavél
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função Arrow em uma variável
const soma = (a, b) => {
    return a+ b
}

console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

const imprimir3 = a => ((a*10)/2)
console.log(imprimir3(10))