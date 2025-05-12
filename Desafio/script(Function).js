function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
let opcao, temp;

opcao = prompt("Escolha a conversão:\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius");
temp = parseFloat(prompt("Digite a temperatura:"));


if (opcao === "1") {
    alert("Resultado: " + celsiusParaFahrenheit(temp).toFixed(2) + " °F");
} else if (opcao === "2") {
    alert("Resultado: " + fahrenheitParaCelsius(temp).toFixed(2) + " °C");
} else {
    alert("Opção inválida.");
}
