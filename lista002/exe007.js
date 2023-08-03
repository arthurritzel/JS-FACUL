function calcularIMC() {
    const peso = parseFloat(prompt("Digite o peso (em kg):"));
    const altura = parseFloat(prompt("Digite a altura (em metros):"));

    if (altura <= 0 || peso <= 0) {
        console.log("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = peso / (altura * altura);

    let categoria;

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        categoria = "Obesidade";
    } else if (imc >= 35 && imc < 39.9) {
        categoria = "Obesidade grau II";
    } else {
        categoria = "Obesidade grau III";
    }

    console.log("Seu IMC é %f - Categoria: %s", imc.toFixed(2), categoria);
}

calcularIMC();