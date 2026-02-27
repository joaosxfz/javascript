//5. Peça o valor de um depósito bancário e calcule o saldo 
// após adicionar 2% de rendimento.

const valorD = Number(prompt("Digite o valor do depósito"))
const resultado = valorD * (1 + 2 / 100)

alert("O saldo final após adicionar 2% fica " +resultado)