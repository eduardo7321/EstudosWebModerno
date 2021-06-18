/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function resultado (valor1 = 0, valor2 = 0) {
    console.log(`a soma é: ${valor1 + valor2}`) 
    console.log(`a subtração é: ${valor1 - valor2}`)
    console.log(`a multiplicação é: ${valor1 * valor2}`)
    console.log(`a divisão é: ${valor1 / valor2}`)    
}

resultado(10, 5)