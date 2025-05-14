let personagensAuto = []; 

for (let index = 0; index < personagensAuto.length; index++) {
    personagensAuto[index] = prompt(`digite o nome do ${index + 1}º personagem:`)
}

// alert(personagensAuto);
// console.log(personagensAuto);

alert(`Aqui estão todos os personagens:
    ${personagensAuto[0]} /n 
    ${personagensAuto[1]} /n 
    ${personagensAuto[2]} /n 
    ${personagensAuto[3]} /n 
    ${personagensAuto[4]}`);