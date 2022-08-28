/* criar uma variável que vai guardar o resultado da soma onde ela inicializará com 0
criar uma estrutura de repetição, onde vai percorrer todos os números de 1 a 100
criar uma lógica onde irá somar o termo atual com o número da sequencia
fechar o looping
escrever um comando para que o resultado seja impresso na tela*/
/*let resultadoSoma = 0;
for (let index = 1; index <= 100; index += 1) {
    resultadoSoma += index;
}
console.log(resultadoSoma);*/

//Exercício 1 

/*O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.*/

//Exercício 1

/*let fatora10 = 10
for (let index = 9; index >= 1; index -= 1) {
  fatora10 *= index;
}
console.log(fatora10)*/

//exercício 2 'minha solução ficou melhor'
/*
let word = 'banana';
let invert = '';
for (let index = word.length -1; index >= 0; index -= 1) {
  invert += word[index] ;
}
console.log(invert);
*/

//exercício 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
/* essa é minha lógica funcionou mas ficou complexa
let menor = '';
for (let index = 0; index < array.length ; index += 1) {
  for (let compar = 0; index < array.length ; index += 1) {
    if (array[compar] < array[index]) {
      menor = array[compar];
    } else {
      menor = array[index];
    }

  }
}
console.log(menor);
*/
/*
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }                        //posso utilizar o length para contar array e string
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }                        //posso utilizar o length para contar array e string
}

console.log(maiorPalavra);
console.log(menorPalavra);
*/

// exercício 4
/* número primo é um numero inteiro maior que 1 que possui somente dois divisores
divisível por 1 e por ele mesmo*/
