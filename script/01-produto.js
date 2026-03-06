//1. Peça ao usuário o nome de um produto e o preço.
//Mostre uma mensagem dizendo quanto custa o produto.

function exercicio1() {
    const produto = prompt("Digite o nome do produto")
    const preco = prompt("Digite o preço do produto")
    
    alert("O " + produto + " custa " + preco)

}
// o carinha de escuta - addEventListner

const buttonExercicio1 = document.getElementById("exercicio1")
    buttonExercicio1.addEventListener('click', () => { exercicio1() })
