/*Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||). Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner, você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.

1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉 */
/*
const a = 10;
const b = 5;

console.log('soma: ' + (a + b));
console.log('subtração: ' + (a - b));
console.log('multiplicação: ' + (a * b));
console.log('Módulo: ' + (a % b));
*/

/*
2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const a = 3;
const b = 5;
if (a > b) {
    console.log(a + ' é maior que ' + b)
} else {
    console.log(b + ' é maior que ' + a)
} 
*/

/*
3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. 


const a = 100
const b = 2
const c = 35

if (a > b && a > c) {
    console.log(a + ' é o maior número dos três')
} else if (b > a && b > c) {
    console.log(b + ' é o maior número dos três')
} else {
    console.log(c + ' é o maior número dos três')
}
*/

/* 4 - Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".


const valor = 6

if (valor > 0) {

  console.log('positive');

} else if (valor < 0) {

  console.log('positive');
} else {
  console.log('zero');
}
*/  

/* 5 🚀 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */
//minha solução
/*let a = 60;
let b = 0;
let c = 60;

if (a + b + c == 180) {
  console.log('true');
} else if (a < 0 || b < 0 || c < 0) {
  console.log('erro é inválido');
} else {
  console.log('false');
} */
/*
let angA = 60;
let angB = 60;
let angC = -5;

let sumAngles = angA + angB + angC;
let anglPositive = angA > 0 && angA > 0 && angC > 0;

if (anglPositive) {
  if (sumAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
    console.log('Não é um triângulo válido');
}
*/

//exercício 8
/*
const numberA = 5;
const numberB = 15;
const numberC = 25;

let verifica = false;

if (numberA % 2 == 0 || numberB % 2 == 0 || numberC % 2 == 0) {
  verifica = true;
} 
console.log(verifica)
*/
/*
const numberA = 5;
const numberB = 15;
const numberC = 25;

let verifica = false;

if (numberA % 2 !== 0 || numberB % 2 !== 0 || numberC % 2 !== 0) {
  verifica = true;
} 
console.log(verifica)
*/

//exercício 10

const custo = 50;
const valorDeVenda = -200;
const quantidadeDeItens = 1000

if (custo >= 0 && valorDeVenda >= 0) {
let lucro = quantidadeDeItens*(valorDeVenda - custo * 1.2);
console.log('Seu lucro é: ' + lucro);
} else {
  console.log('erro os valores não podem ser negativos')
}