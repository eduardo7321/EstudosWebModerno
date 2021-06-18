let dobro = function (a) {
    return 2 * a
}

console.log(dobro(2))

dobro = (a) => {
    return 2 * a
}

console.log(dobro(3))

dobro = a => 2 * a // return implicito

console.log(dobro(4))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá2'
console.log(ola())

ola = _=> 'ola3'
console.log(ola())