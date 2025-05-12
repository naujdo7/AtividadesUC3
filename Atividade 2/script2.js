let minimo, maximo, i, resultado="";

minimo = parseInt(prompt("Digite um número"));
maximo = parseInt(prompt("Digite um numero maior"));

i = minimo;

while (i < maximo) {
    if (i % 2 == 0) {
        resultado = resultado + i + " - par\n";
    } else {
        resultado = resultado + i + " - impar\n";
    }

    i = i + 1;
}

console.log(resultado)
alert(resultado)

