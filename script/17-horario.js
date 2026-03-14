//14. Peça o horário atual (apenas a hora). Informe:
//Bom dia (5–11)
//Boa tarde (12–17)
//Boa noite (18–4)

const hora = Number(prompt("Digite o horário atual (APENAS A HORA)"))

if (hora >= 5 && hora <= 11) {
    alert("BOM DIA ☀️")
}
else if (hora >= 12 && hora <= 17) {
    alert("BOA TARDE 🌥️")
}
else {
    alert("BOA NOITE 🌑")
}