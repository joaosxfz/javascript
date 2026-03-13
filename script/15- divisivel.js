//13. Peça dois números e informe se o primeiro é divisível pelo segundo.

const num1 = Number(prompt("Digite o primeiro número"))
const num2 = Number(prompt("Digite o primeiro número"))

if (num1 % num2 === 0) {
    alert("O " +num1+ " é divisível por " +num2)
}
else {
    alert("O " +num1+ " não é divisível por " +num2)
}