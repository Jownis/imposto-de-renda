"use strict"
window.addEventListener("load", function () {
    let btn = document.getElementById("botao");

    btn.addEventListener("click", function () {
        let num1, num2, num3, resultado, percent;

        num1 = document.getElementById("v1").value;
        num2 = document.getElementById("v2").value;
        num3 = document.getElementById("v3").value;

        if (Number(num3) <= 1434) {
            percent = Number(0);
            resultado = Number(num3) * percent;
        } else if (Number(num3) >= 1435) {
            percent = Number(0.075);
            resultado = Number(num3) * percent;
        } else if (Number(num3) >= 2150) {
            percent = Number(0.15);
            resultado = Number(num3) * percent;
        } else if (Number(num3) >= 2866) {
            percent = Number(0.225);
            resultado = Number(num3) = percent;
        } else if (Number(num3) >= 3.582) {
            percent = Number(0.275);
            resultado = Number(num3) = percent;
        }
        document.getElementById("impostoResultado").value = resultado;
        let conteudo = document.getElementById("texto").innerHTML;
        document.getElementById("texto").innerHTML = `${conteudo} <br> Resgistro: <b>${num1}</b> | Nome: <b>${num1}</b> | Imposto de Renda: <b>${resultado}</b>`
    });
});
