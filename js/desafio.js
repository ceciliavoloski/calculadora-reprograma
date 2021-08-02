/*
1- receber X de valor de horas
2- receber Y de horas de projeto
3- calcular ao receber um click
4- exibir na tela o calculo
*/

let valorHora = document.getElementById("valor-hora");
let horaProjeto = document.getElementById("horas-projeto");
let valorTotal = document.getElementById("resposta");

function calcular() {
    let resultadoFinal = (valorHora.value * horaProjeto.value);
    valorTotal.textContent = resultadoFinal;
}
