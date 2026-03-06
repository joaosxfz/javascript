//Desafio 0. Peça um número decimal e mostre ele arredondado para:
//Cima
//Baixo
//Duas casas decimais

const num = Number(prompt("Digite um número decimal"))
const baixo = num - (num % 1)
const cima = baixo + 1
const duasCasas = num.toFixed(2)

alert("Para baixo = " +baixo+ 
    " Para cima = " +cima+ 
    " e Duas Casas = " +duasCasas)