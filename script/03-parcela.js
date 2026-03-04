//3. Peça o valor total de uma compra e o número de parcelas.
// Mostre o valor de cada parcela.

const valorT = Number(prompt("Digite o valor da compra"))
const numP = Number(prompt("Digite o número de parcelas da compra"))
const resultado = valorT / numP

alert(+numP + " parcelas de  R$ " + resultado)