const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1 - Crie uma função para adicionar o turno da noite na lesson2. Essa 
// função deve possuir três parâmetros, sendo eles:  o objeto a ser
// modificado, a chave que deverá ser adicionada e o valor dela.

//   const addTurn = (objModfy, keyAdd, keyValue) => {
//     objModfy[keyAdd] = keyValue;
//   }

//   addTurn(lesson2, 'turno', 'noite');
//   console.log(lesson2)

// 2 -Crie uma função para listar as keys de um objeto. Essa função
//  deve receber um objeto como parâmetro.

//   const objKeys = (obj) => Object.keys(obj)

//   console.log(objKeys(lesson1))

// 3 - Crie uma função para mostrar o tamanho de um objeto.

//   const tamObject = (obj) => Object.keys(obj).length

//   console.log(tamObject(lesson1)) //aqui eu acesso a função passando o objeto como parâmetro

// 4 - Crie uma função para listar os valores de um objeto. 
// Essa função deve receber um objeto como parâmetro.

//   const objValues = (obj) => Object.values(obj);

//   console.log(objValues(lesson1))

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas
// através do Object.assign.

// 5.1 - Usando o objeto criado no tópico anterior, crie uma 
   //função que retorne o número total de estudantes em todas as aulas

 const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// const fullStudents = (classes) => {
// const keys = Object.keys(classes);
// let total = 0;

//   for(index in keys) {
//     const currentKeys = keys[index]
//     total += classes[currentKeys].numeroEstudantes;
//   }
// return total;
// }

// console.log(fullStudents(allLessons));

// 6 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
// const getValueByNumber = (lesson,key) => Object.values(lesson)[key]

// console.log(getValueByNumber(lesson1, 0));

// 7 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve
// possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// const verifyPair = (obj, key, value) => {
//   const entriesArr = Object.entries(obj);
//   let constIten = false;

//   for(index in entriesArr) {
//     let entrieKey = entriesArr[index][0]; 
//     let entrieValue = entriesArr[index][1];

//     if(entrieKey === key && entrieValue === value) constIten = true;
//   }
//   return constIten
// }

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// 🚀 Bônus - Organizando lições
// Utilizando o objeto (allLesson), Crie uma função para contar quantos estudantes assistiram
//  às aulas de Matemática.

// Utilizando o objeto (allLesson), Crie uma função que deverá retornar um objeto que representa
//  o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de
//   estudantes.

// const sumAllStudents = (obj) => {
//   total = 0;
//   const array = Object.keys(obj)
//   for (index in array) {
//     if(obj[array[index]].materia === 'Matemática') {
//       total += obj[array[index]].numeroEstudantes
//     }
//   }
//   return total
  
// }

// console.log(sumAllStudents(allLessons))

//criando o relatório
const getInfo = (obj, teacher) => {
  const lessons = [];
  let students = 0;
  const array = Object.values(obj);

  for(index in array) {
    if(array[index].professor === teacher) {
      lessons.push(array[index].materia);
      students += array[index].numeroEstudantes;
    }
  }
  return { aulas: lessons, estudantes: students }
}


const createReport = (obj, teacher) => {
  const report = {};
  report.professor = teacher;
  Object.assign(report, getInfo(obj,teacher));
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

