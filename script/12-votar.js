//9. Peça a idade de uma pessoa e informe se ela pode votar:
//Menor que 16 → Não pode votar
//Entre 16 e 17 → Voto opcional
//18 ou mais → Voto obrigatório

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