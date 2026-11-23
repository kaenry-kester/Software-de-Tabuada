const resultado = document.getElementById("output");
const caixaResultado = document.getElementById("resultado");

const mostrarTabuada = () => {
    const valor1 = Number(document.getElementById("valor1").value);
    const nvezes = Number(document.getElementById("nvezes").value);

    let msg = "";

    for (let i = 0; i <= nvezes; i++) {
        msg +=(`${valor1} x ${i} = ${valor1 * i} <br>` );
    }

    caixaResultado.style.display="flex";
    resultado.innerHTML = msg;
}

const limparTabuada = () => {
    caixaResultado.style.display="none";
}