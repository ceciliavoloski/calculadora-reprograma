/*
1) entrada de dados 1;
2) entrada de dados 2;
3) clicar em calcular;
4) conta;
5) mostrar o resultado;

entrada de dados 1: id= ganho-mes

entrada de dados 2: id= horas-dia

resposta: id= resposta

botão: button onclick="calcularValorHora()"
*/

let salario = document.querySelector("#ganho-mes");
let horasTrabalhadas = document.querySelector("#horas-dia");
let mostrarResultado = document.querySelector("#resposta");

function calcularValorHora() {
    let resultado = (salario.value / horasTrabalhadas.value);
    mostrarResultado.textContent = resultado;
}

