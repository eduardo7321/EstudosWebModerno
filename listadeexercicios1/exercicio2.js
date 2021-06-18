/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function TipoDeTriangulo(lado1 = 0, lado2 = 0, lado3 = 0) {
    if (lado1 == lado2 & lado2 == lado3) {
        console.log("triangulo equilátero: três lados iguais")
    } else if(lado1 != lado2 & lado2!= lado3) {
        console.log("triangulo escaleno: todos lados fiferente")
    } else {
        console.log("triangulo isósceles: dois lados iguais e um diferente")        
    }    
}

TipoDeTriangulo(10, 10, 10)
TipoDeTriangulo(10, 10, 20)
TipoDeTriangulo(10, 20, 30)