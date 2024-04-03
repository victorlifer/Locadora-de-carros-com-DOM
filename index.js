// criando referencias para o form

const formulario = document.getElementById("form");
const respota1 = document.querySelector("#outRes1");
const respota2 = document.querySelector("#outRes2");
const respota3 = document.querySelector("#outRes3");

formulario.addEventListener("clicar", (e) => {
    e.preventDefault();

    const infoVeiculo = formulario.inNome.value;
    const infoValor = Number(formulario.inPreco.value)

    const entrada = infoValor * 0.50
    const parcelas = (infoValor * 0.50) / 12

    respota1.innerText = `Promoção: ${infoVeiculo}`
    respota2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    respota3.innerText = `+12x de ${parcelas.toFixed(2)}`


})
