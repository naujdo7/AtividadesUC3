let primeiroNumero, segundoNumero, i, resposta = "sim";

while (resposta = "sim") {
    primeiroNumero = parseInt (prompt("Digite um número"));
    segundoNumero = parseInt (prompt("Digite um numero maior"));

    while (segundoNumero <= primeiroNumero) {
        segundoNumero = parseInt (prompt("Digite um número maior que o anterior"));
    }

    i = primeiroNumero;
    let resultado = "";

    while (i < segundoNumero) {
        if (i % 2 ==0) {
        resultado = i +  " - par\n";
        } else {
        resultado = i +  " - impar\n";
        }

    i = i + 1;
    }
    return resultado
}

    resposta = prompt(("Quer fazer de novo?"));

    console.log(resultado)
    alert(resultado)
