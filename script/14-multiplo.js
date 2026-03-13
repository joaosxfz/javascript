//12. Peça um número e informe se ele é múltiplo de 5.

const num = Number(prompt("Digite um número"))

if (num % 5 === 0) {
    alert("O " +num+ " é multiplo de 5")
}
else {
    alert("O número não é multiplo de 5")
}