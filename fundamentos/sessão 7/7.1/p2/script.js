// 1-1 - Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número inteiro e positivo N,
//  representado por N!, é o produto de todos os seus antecessores
//   até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// const factorial = (number) => {
//   let result = 1;
//   for(let index = 2; index <= number; index += 1) {
//     result *= index;
//   }
//   return result
// }


// a mesma função de forma recursiva

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

// const print = factorial(5);
// console.log(`O resultado fatorial é: ${print}`)

// Exercício 2
// Crie uma função que receba uma frase 
// como parâmetro e retorne a maior palavra contida nesta frase.

const longestWord = word => {
  const text = word.split(' ');
  let result = '';
  let maxWord = 0
  

  for(const index of text) {
    if (index.length > maxWord) {
      maxWord = index.length;
      result = index;
    }
  }
  return result;
}


console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'

//exercício 3 está no index.html

//exercício 4 

// 🚀 Exercício 4
// Crie duas funções JavaScript com as seguintes especificações:

// Não se esqueça de usar template literals

// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

// O nome da função deverá ser substituaX;
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável do tipo const, com o nome frase,
//  atribuindo o valor 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!'
//  seja substituído pelo nome passado por parâmetro.
// Exemplo:

// Parâmetro: ‘Bebeto’
// Retorno: ‘Tryber Bebeto aqui!’
// Spoiler: O método split() pode ser utilizado de diferentes maneiras,
//  como separar as palavras de um texto.

const substituaX = nome => {
  const frase = 'Tryber x aqui!';
  const contFrase = frase.split(' ');

  for(let index = 0; index < contFrase.length; index += 1) {
    if(contFrase[index] === 'x') {
      contFrase[index] = nome;
    }
  }
  return contFrase.join(' ');
}

console.log(substituaX('maravilha'));