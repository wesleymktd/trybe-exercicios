// // Ao chamar a função doingThings:
// const Acordando = () => 'Acordando!!';
// const coffe = () => 'Bora tomar café!!';
// const sleep = () => 'Partiu dormir!!';
// const doingThings = (callback) => {
//     const cal = callback();
//     console.log(cal);
// }
// doingThings(coffe)

// // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// // Acordando!!
// ---------------------------------------------------------k

// exercícios 1 nova pessoa contratada
// Crie uma função que retorne um objeto no formato { nomeCompleto, email }
//  representando uma nova pessoa contratada. Passe sua função como parâmetro da
//   HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A
//    sua função deve receber como parâmetro o nome completo da pessoa funcionária 
//    e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

// const gerarEmailUnderLine = (nameComplet) => {
//     const email = nameComplet.toLowerCase().split(' ').join('_');
//     return {nameComplet, email: `${email}@betrybe.com`}
// }

// const newEmployees = (gerarEmailUnderLine) => {
//     const employees = {
//       id1: gerarEmailUnderLine('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: gerarEmailUnderLine('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: gerarEmailUnderLine('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

// console.log(newEmployees(gerarEmailUnderLine))

// -----------------------------------------------------------------

// exercício 2 Sorteador de loteria
// (objetivo) Desenvolva uma HOF que retorna o resultado de um sorteio. 
// -Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado
//  - (criar)e uma função que checa se o número apostado é igual ao número sorteado.
//  - O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”). 
//   

//HOF vai gerar os números aleatórios entre 1 e 5
// const numberChecker = (myNumber, sort) => myNumber === sort;

// const resultSort = (myNumber, callback) => {
//   const sort = Math.floor((Math.random() * 5) + 1) 
//   return  callback(myNumber, sort) ? 'Parabéns você ganhou' : 'Tente novamente';
// }

// console.log(resultSort(4, numberChecker));

// ------------------------------------------------------------------
// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos 
// acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas
//  pela pessoa estudante. Utilize os seguintes arrays:

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


// const comperStudents = (rightAnswers, studentAnswers) => {
//   if (rightAnswers === studentAnswers) {
//     return 1;
//   } if (studentAnswers === 'N.A') {
//     return 0;
//   }
//   return -0.5; 
// }


// const correctExam = (rightAnswers, studentAnswers, callback) => {
//   let points = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     let result = callback(rightAnswers[index], studentAnswers[index]);
//     points += result
//   }
//   return `${points} pontos`
// }

// console.log(correctExam(RIGHT_ANSWERS, STUDENT_ANSWERS, comperStudents));

// -----------------------------------------------------------------

// Exercícios - Bônus - Game Actions Simulator
// Parte I
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo.
//  Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados
//   da rodada.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.

const dragonAtack = (dragon) => {
  const damageMin = 15;
  const damageMax = Math.floor(Math.random()*dragon.strength);
  const dragonDamage = damageMax > damageMin ? damageMax : damageMin;
  return dragonDamage;
}

// se eu tiver tempo disponível continuo esse bonus