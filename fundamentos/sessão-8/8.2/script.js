// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach(showEmailList)

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => {
// return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
// };

// console.log(findDivisibleBy3And5());
// -------------------------------------------------
// Utilize o find para encontrar o primeiro nome com cinco letras,
//  caso ele exista:

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   return names.find((name) => name.length === 5);
// };

// console.log(findNameWithFiveLetters());
// ---------------------------------------------------------
//Utilize o find para encontrar a música com id igual a 31031685,
// caso ela exista:

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// function findMusic(id) {
//   return musicas.find((musicas) => musicas.id === id)
// };

// console.log(findMusic('31031685'));
// -----------------------------------------------------

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

// ------------------------------------------

// const grades = {
//     portugues: 'Aprovado',
//     matematica: 'Reprovado',
//     ingles: 'Aprovado',
//   };
  
//   const verifyGrades = (studentGrades) => (
//     Object.values(studentGrades).every((grade) => grade === 'Aprovado')
//   );
  
//   console.log(verifyGrades(grades));

// ---------------------------------------------------
// Escreva uma função que recebe dois parâmetros: o primeiro um array
//  de nomes e o segundo, um nome qualquer. Essa função deve retornar
//   true se o segundo parâmetro - um nome qualquer - estiver contido
//    no primeiro parâmetro - array de nomes. Caso não esteja contido,
//     deve retornar false.

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((currentName) => currentName === name)
// };

// console.log(hasName(names, 'Ana'));

// -----------------------------------------------------------
// Escreva uma função, que dado um array de pessoas e uma idade mínima,
//  retorne true se todas tiverem a idade maior ou igual à mínima e, caso
//   contrário, false. Use every;

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//     return arr.every((person) => person.age >= minimumAge );
//   };
  
//   console.log(verifyAges(people, 18));

//   ------------------------------------------------------

// método sort

// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
// console.log(food);
// // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// ----------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort();
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// -------------------------------------------

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points); // [1, 5, 10, 25, 40, 100]

// ---------------------------
// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => b - a);
// console.log(points); // [ 100, 40, 25, 10, 5, 1 ]
// ------------------------------------

// Utilize o sort para ordenar o array pela idade das pessoas 
// em ordem crescente.

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people.sort((a, b) => b.age - a.age)
  
  console.log(people);