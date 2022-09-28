// 1 - Utilize o reduce para transformar uma matriz em um array.

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];
  
//   function flatten(array) {
//     return array.reduce((acc, curr) => {
//       return acc.concat(curr)
//     })          
//   }

// console.log(flatten(arrays))

// ------------------------------------
// 🚀 Exercício 2
// Considere o seguinte array e manipule-o utilizando reduce 
// para fazer o que é pedido:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//2.1 Crie uma string com os nomes de todas as pessoas autoras.

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames(book) {
//  return book.reduce((acc, curr) => `${acc} ${curr.author.name}.`, '')
// }

// console.log(reduceNames(books))

// -------------------------------------------

// 2.2 Calcule a média de idade que as pessoas autoras tinham quando
//  seus respectivos livros foram lançados.

// const expectedResult = 43;

// function averageAge() {
//   const ageAuthors = books.map((elem) => elem.releaseYear - elem.author.birthYear )
//   const sum = ageAuthors.reduce((acc, curr) => acc + curr )
//   const media = sum / books.length;
//   return media
// }

// console.log(averageAge())

// -----------------------------
// 2.3 Encontre o livro com o maior nome.

// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

// function longestNamedBook(books) {
//   return books.reduce((acc, curr) => {
//     if (acc.name.length > curr.name.length) {
//       return acc;
//     }
//     return curr;
//   });
// }
// console.log(longestNamedBook(books))
// ---------------------------------

// 🚀 Exercício 3
// Dado o array de nomes, utilize o reduce para retornar
//   quantidade de vezes em que aparece a letra a, maiúscula 
//ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA(names) {
  const concat

  
}

// -------------------------------

