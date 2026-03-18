//18. Peça um valor em metros e converta para:
//Milímetros
//Decímetros
//Hectômetros

const valor = Number(prompt("Digite um valor em metros"))
const mm = valor * 1000
const dm = valor * 10
const hm = valor / 100

alert(valor+ " em milímetros: " +mm+ " | em decímetros: " +dm+ " | em hectômetros: " +hm)