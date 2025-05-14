let nomes = new Array(21); //criando array de 21 posições para nomes
let idades = new Array(21);//criando array de 21 posições para idades
let cpfs = new Array(21);//criando array de 21 posições para cpfs
 
nomes[0]="Juquinha";
idades[0]=40;
cpfs[0]="77788899988";
 
 
//CRIANDO UM OBJETO
const pessoa = {nome:"Juquinha",idade:40,cpf:"77788899988"} //criado objeto pessoa
const pessoas = new Array(21); //criado array para guardar pessoas
 
const arrayPessoas = [
    {
        nome:"Juquinha",
        idade:40,
        cpf:"77788899988"
    },
    {
        nome:"Mariazinha",
        idade:28,
        cpf:"77788899900"
    }
]

let mensagem = "Lista de Pessoas:\n";
 
    arrayPessoas.forEach((pessoa, index) => {
      mensagem += `${index + 1} - Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, CPF: ${pessoa.cpf}\n`;
    });

    alert(mensagem)
//exibindo informações do objeto
// alert(pessoas.nome);
 
// //atribuindo valores ao objeto
// pessoas.nome = prompt("Digite o nome da pessoa:");
// pessoas.idade = prompt("Digite a idade da pessoa:");
// pessoas.cpf = prompt("Digite o cpf da pessoa:");
 
// alert(`Nome: ${pessoas.nome}
// Idade: ${pessoas.idade}
// CPF: ${pessoas.cpf}`      
// );