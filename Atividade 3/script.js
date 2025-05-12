let nome, salario, vendas, comissao, pagamento;

nome = (prompt("Nome do vendedor:"));
salario = parseInt(prompt("Salário do vendedor:"));
vendas = parseInt(prompt("Vendas feitas:"));

if (vendas >= 3000) {
    comissao = vendas * 0.15;
} else if (vendas >= 1500) {
    comissao = vendas * 0.10;
} else {
    comissao = vendas * 0.05;
}

pagamento = salario + comissao;

let mensagens = `Vendedor: ${nome}
------------------------
Valor das vendas: R$ ${vendas}
Valor da comissão: R$ ${comissao}
Valor do Salário: R$ ${salario}
Pagamento: R$ ${pagamento}`;

console.log(mensagens);
alert(mensagens);
