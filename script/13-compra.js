//10. Peça o valor de uma compra. Se for maior que 100, aplique 5% de 
// desconto. Mostre o valor final.

const compra = Number(prompt("Digite o valor da compra"))
const desconto = compra * (1 - 5 / 100)

if (compra > 100) {
    alert("Com 5% de desconto o valor fica: " + desconto.toFixed(2))
}
else {
    alert("Sem desconto")
}