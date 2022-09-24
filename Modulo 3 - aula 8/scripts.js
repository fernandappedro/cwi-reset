let frutas = ['Maça', 'Banana', 'Laranja', 'Melancia', 'Manga']

let quantidadeDeFrutas = frutas.length

let marcador = 0 

while (marcador < quantidadeDeFrutas) {
    console.log(frutas[marcador])

    marcador = marcador+1
}





let valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55, 87]

let somaDosValores = 0

for (let i = 0; i < valores.length; i++) {
    somaDosValores = somaDosValores + valores[i]
 }

 console.log('Média aritimética', somaDosValores / valores.length)