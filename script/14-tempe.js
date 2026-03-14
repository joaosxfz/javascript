//11. Peça a temperatura atual. Informe se está:
//Frio (menos de 15)
//Agradável (15 a 25)
//Quente (acima de 25)

const temp = Number(prompt("Digite a temperatura"))

if (temp < 15) {
    alert("Frio 🥶")
}
else if (temp >= 15 && temp <= 25) {
    alert("Agradavel 😎")
}
else {
    alert("Quente 🥵")
}