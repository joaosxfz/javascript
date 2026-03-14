//17. Peça a altura e o peso de uma pessoa. Calcule o IMC.

const altura = Number(prompt("Digite sua altura"))
const peso = Number(prompt("Digite seu peso"))
const resultado = peso / (altura * altura)

alert("Teu imc é: " +resultado)