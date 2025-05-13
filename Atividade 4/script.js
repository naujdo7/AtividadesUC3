let inicio, fim, i;

inicio = prompt(("Digite o primeiro número:"))
fim = prompt(("Digite o segundo número:"))

if (inicio == fim) {
    alert("Impossível incrementar ou decrementar!")
} else if (inicio < fim) {
    for (let i = inicio; i <= fim; i++) {
        if (i == inicio) {
            alert(i + " - Início")
        } else {
            if (i == fim) {
                alert(i + " - Fim")
            } else {
                alert(i)
            }
        }
    }
} else {
    for (let i = inicio; i >= fim; i--) {
        if (i == inicio) {
            alert(i + " - Início")
        } else {
            if (i == fim) {
                alert(i + " - Fim")
            } else {
                alert(i)
            }
        }
    }
}