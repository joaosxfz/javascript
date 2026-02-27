//6. Peça a quantidade de litros de combustível consumidos e a
//distância percorrida. Calcule o consumo médio (km por litro).

const litros = Number(prompt("Digite a quantidade de litros consumidos"))
const distancia = Number(prompt("Digite a distância percorrida"))
const resultado = distancia / litros

alert(resultado+ "km por litro")