let personagem1, personagem2, personagem3, personagem4, personagem5;

let personagensAuto = []; 

personagensAuto[0] = prompt(("digite o nome do primeiro personagem:"))
personagensAuto[1] = prompt(("digite o nome do segundo personagem:"))
personagensAuto[2] = prompt(("digite o nome do terceiro personagem:"))
personagensAuto[3] = prompt(("digite o nome do quarto personagem:"))
personagensAuto[4] = prompt(("digite o nome do quinto personagem:"))

alert(personagensAuto);
console.log(personagensAuto);

alert(`Aqui estão todos os personagens:
    ${personagensAuto[0]} /n 
    ${personagensAuto[1]} /n 
    ${personagensAuto[2]} /n 
    ${personagensAuto[3]} /n 
    ${personagensAuto[4]}`);