const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
//    console.log(funcionarios)


const menorSalario = funcionarios.salario.map(Number).reduce(function(a, b) {
        return Math.min(a, b);
    })

    const pais = funcionarios => funcionarios.pais = 'china'
    const genero = funcionarios => funcionarios.genero = 'F'

    const menorSalario = funcionarios => funcionarios.salario < 10000 

    
    console.log(funcionarios.filter(pais).filter(genero).filter(menorSalario))

})
/*
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Olástico', preco: 18.99, fragil: false }
]

console.log(funcionarios.filter(function(pais) {
    return pais.pais('china') > 15
}))
*/


