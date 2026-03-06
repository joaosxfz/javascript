//Desafio 1. Peça o valor de um produto e calcule:
//Preço com 15% de aumento
//Preço com 10% de desconto

const valor = Number(prompt("Digite o valor do produto"))

const aumento = valor * 1.15
const desconto = valor * 0.90

alert(valor + " com 15% de aumento = " + aumento + " e com 10% de desconto = " + desconto)