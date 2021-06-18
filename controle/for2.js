const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(`Na Linha ${i}`,` = Nota ${notas[i]}.`)
}

const pessoa = {
    nome: 'Taty',
    sobrenome: 'França',
    idade: 23,
    peso: 57
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}