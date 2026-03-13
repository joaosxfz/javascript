//16. Peça o raio de um círculo. Calcule:
//Área
//Circunferência
//(Use Math.PI)

const raio = Number(prompt("Digite o raio de um círculo"))
const area = Math.PI * raio ** 2
const circu = 2 * Math.PI * raio

alert("A área é: " +area+ " e Circunferência: " +circu)