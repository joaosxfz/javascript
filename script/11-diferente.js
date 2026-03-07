//Desafio 2. Peça dois números e informe se eles são iguais ou 
// diferentes, se diferentes, informe qual o menor.

const num1 = Number(prompt("Digite o primeiro número"))
const num2 = Number(prompt("Digite o segundo número"))

if (num1 === num2) {
    alert ("Eles são iguais")
}

else if (num1 < num2 ) {
    alert("O menor número é " +num1)
}

else {
    alert("O menor número é " +num2)
}