let opcao, temp, resultado;

opcao = prompt("Escolha a conversão:\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius");
temp = parseFloat(prompt("Digite a temperatura:"));

if (opcao == "1") {
    resultado = temp * 1.8 + 32;
    alert("Resultado: " + resultado.toFixed(2) + " °F");
} else {
    resultado = (temp - 32) * 5 / 9;
    alert("Resultado: " + resultado.toFixed(2) + " °C");
}