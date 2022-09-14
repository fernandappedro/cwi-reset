let peso = 120
let altura = 1.66


let alturaAoQuadrado = Math.pow(altura,2)
let IMC = peso/alturaAoQuadrado
console.log(IMC)

if (IMC < 18.50) {
    console.log('Magreza')
}

if (IMC > 18.50 && IMC < 24.99 ) {
    console.log('Normal')
}

if (IMC > 25.00 && IMC< 29.99) {
    console.log('Sobrepeso')
    console.log('Cuidado! Você está acima do peso recomendado pela OMS.')
}

if (IMC > 30 && IMC < 39.99) {
    console.log('Obesidade')
    console.log('Cuidado! Você está acima do peso recomendado pela OMS.')
}
if (IMC >= 40) {
    console.log('Obesidade grave')
    console.log('Cuidado! Você está acima do peso recomendado pela OMS.')
    console.log('É importante procurar um médico para avaliar sua saúde.')
}


