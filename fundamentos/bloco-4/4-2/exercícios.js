/*
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);   
}
*/

// for (of) é um resumo do for "sozinho"'é um for mais preguiçoso
/*let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero); //aqui eu jogo apenas o index pra dentro do log e tá de boa
}*/

// resultado:
//1
//2
//3
//4
//5

/*
exercício rápido sobre
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
  console.log(name);
}
*/

/*
function dice () { 
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
let cont = 0;
while (d1 === d2) {
  d2 = dice();
  cont += 1 
}
*/

//exercícios práticos

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*1 - for (let number of numbers) {
  console.log(number);
}*/

/*2 - let resultadoSoma = 0
for (let index = 0; index < numbers.length; index += 1) {
  resultadoSoma = resultadoSoma + numbers[index];
}
console.log(resultadoSoma);
*/

/*let resultadoSoma = 0

for (let index = 0; index < numbers.length; index += 1) {
  resultadoSoma = resultadoSoma + numbers[index];
}
let mediaAritmetica = resultadoSoma / numbers.length
console.log(mediaAritmetica);*/

/*let resultadoSoma = 0

for (let index = 0; index < numbers.length; index += 1) {
  resultadoSoma = resultadoSoma + numbers[index];
}
let mediaAritmetica = resultadoSoma / numbers.length
if (mediaAritmetica > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igual a 20')
}
*/
/*
let maiorValor = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }  
}
console.log(maiorValor);
*/
/*qValoresImpares = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    qValoresImpares += 1
  }
}
  console.log(qValoresImpares);
*/

// exercício 7 
/*let menorValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }  
}
console.log(menorValor);
*/
//exercício 8 
/*
let numeros =[];

for (let index = 1 ; index <= 25 ; index += 1) {
  let divide = index / 2;
  numeros.push(divide);
}
console.log(numeros);
*/
faltou apenas o bonus para concluir