// 🚀 Exercício 1
// Altere o tipo das variáveis(var) para let ou const para que 
// respeitem o escopo em que foram declaradas, e altere a função
//  utilizando arrow function e template literals.

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
//     // Se necessário esta linha pode ser removida.
// }

//   testingScope(true);

//   Crie uma função que retorne um array em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  for(let pos1 = 0; pos1 < array.length; pos1 =+ 1) {
    for(let pos2 = 1; pos2 < array.length; pos2 =+ 1) {
      if(pos2 < pos1) {
        let menorTerm = array[pos2]; //guardei o termo menor em uma variável
        array[pos2] = array[pos1]; //aqui eu faço a troca dos termos
        array[pos1] = menorTerm; //o termo da posição 1 é = menorTerm
      }
    }
  }
  return array;
}
console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉