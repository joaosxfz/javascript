function exercicio1() {
    const produto = prompt("Digite o nome do produto")
    const preco = prompt("Digite o preço do produto")

    alert("O " + produto + " custa " + preco)

}
const buttonexercicio1 = document.getElementById("exercicio1")
buttonexercicio1.addEventListener('click', () => { exercicio1() })

// --------------------------------------------------------------------------

function exercicio2() {
    const comp = prompt("Digite o comprimento do terreno")
    const largura = prompt("Digite a largura do terreno")
    const resultado = comp * largura

    alert("A área possui " + resultado + " m por quadrado")
}
const buttonexercicio2 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => { exercicio2() })

// --------------------------------------------------------------------------

function exercicio3() {
    const valorT = Number(prompt("Digite o valor da compra"))
    const numP = Number(prompt("Digite o número de parcelas da compra"))
    const resultado = valorT / numP

    alert(+numP + " parcelas de  R$ " + resultado)
}
const buttonexercicio3 = document.getElementById("exercicio3")
buttonexercicio3.addEventListener('click', () => { exercicio3() })

// --------------------------------------------------------------------------

function exercicio4() {
    const dias = prompt("Digite a quantidade de dias viajados")
    const resultado = 24 * dias

    alert(dias + " dias equivalem à " + resultado + "h")
}
const buttonexercicio4 = document.getElementById("exercicio4")
buttonexercicio4.addEventListener('click', () => { exercicio4() })

// --------------------------------------------------------------------------

function exercicio5() {
    const valorD = Number(prompt("Digite o valor do depósito"))
    const resultado = valorD * (1 + 2 / 100)

    alert("O saldo final após adicionar 2% fica " + resultado)
}
const buttonexercicio5 = document.getElementById("exercicio5")
buttonexercicio5.addEventListener('click', () => { exercicio5() })

// --------------------------------------------------------------------------

function exercicio6() {
    const litros = Number(prompt("Digite a quantidade de litros consumidos"))
    const distancia = Number(prompt("Digite a distância percorrida"))
    const resultado = distancia / litros

    alert(resultado + "km por litro")
}
const buttonexercicio6 = document.getElementById("exercicio6")
buttonexercicio6.addEventListener('click', () => { exercicio6() })

// --------------------------------------------------------------------------

function exercicio7() {
    const pedido = Number(prompt("Digite um número"))
    const ante = pedido - 1
    const suce = pedido + 1

    alert("antecessor = " + ante + "     sucessor = " + suce)
}
const buttonexercicio7 = document.getElementById("exercicio7")
buttonexercicio7.addEventListener('click', () => { exercicio7() })

// --------------------------------------------------------------------------

function exercicio8() {
    const idade = Number(prompt("Digite a idade"))
    const resultado = 52 * idade

    alert("Essa pessoa viveu " + resultado)
}
const buttonexercicio8 = document.getElementById("exercicio8")
buttonexercicio8.addEventListener('click', () => { exercicio8() })

// --------------------------------------------------------------------------

function exercicio9() {
    const num = Number(prompt("Digite um número decimal"))
    const baixo = num - (num % 1)
    const cima = baixo + 1
    const duasCasas = num.toFixed(2)

    alert("Para baixo = " + baixo +
        " Para cima = " + cima +
        " e Duas Casas = " + duasCasas)
}
const buttonexercicio9 = document.getElementById("exercicio9")
buttonexercicio9.addEventListener('click', () => { exercicio9() })

// --------------------------------------------------------------------------

function exercicio10() {
    const valor = Number(prompt("Digite o valor do produto"))

    const aumento = valor * 1.15
    const desconto = valor * 0.90

    alert(valor + " com 15% de aumento = " + aumento + " e com 10% de desconto = " + desconto)
}
const buttonexercicio10 = document.getElementById("exercicio10")
buttonexercicio10.addEventListener('click', () => { exercicio10() })

// --------------------------------------------------------------------------

function exercicio11() {
const num1 = Number(prompt("Digite o primeiro número"))
const num2 = Number(prompt("Digite o segundo número"))

if (num1 === num2) {
    alert("Eles são iguais")
}
else if (num1 < num2) {
    alert("O menor número é " + num1)
}
else {
    alert("O menor número é " + num2)
}
}
const buttonexercicio11 = document.getElementById("exercicio11")
buttonexercicio11.addEventListener('click', () => { exercicio11() })

// --------------------------------------------------------------------------

function exercicio12() {
const idade = Number(prompt("Descubra se vc pode votar 👀"))

if (idade < 16) {
    alert("Pode não man 😐")
}
else if (idade === 16 || idade === 17) {
    alert("Se quiser sim man 😎")
}
else {
    alert("Obrigatório 💀")
}
}
const buttonexercicio12 = document.getElementById("exercicio12")
buttonexercicio12.addEventListener('click', () => { exercicio12() })
