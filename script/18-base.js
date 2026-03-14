//15. Peça a base maior, base menor e altura de um trapézio. Calcule a área.

const maior = Number(prompt("Digite a base maior"))
const menor = Number(prompt("Digite a base menor"))
const altura = Number(prompt("Digite a altura do trapézio"))
const resultado = (maior + menor) * (altura / 2)

alert("A área é: " +resultado)