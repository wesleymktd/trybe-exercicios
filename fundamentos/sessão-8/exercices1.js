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
  
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// caminhão da dica utilize map
//   const expectedResult = [
//     'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//     'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//     'Fundação - Ficção Científica - Isaac Asimov',
//     'Duna - Ficção Científica - Frank Herbert',
//     'A Coisa - Terror - Stephen King',
//     'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
//   ];
  
//   function formatedBookNames(book) {
//     return book.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)
//   }

  // console.log(formatedBookNames(books))

// ------------------------------------------------------

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade 
//  author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando 
//  o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais 
//  velha, considerando suas idades quando o livro foi lançado.

// De olho na dica 👀: use as funções map, sort

// const expectedResult = [
//     {
//       age: 31,
//       author: 'Isaac Asimov',
//     },
//     {
//       age: 38,
//       author: 'H. P. Lovecraft',
//     },
//     {
//       age: 39,
//       author: 'Stephen King',
//     },
//     {
//       age: 43,
//       author: 'George R. R. Martin',
//     },
//     {
//       age: 45,
//       author: 'Frank Herbert',
//     },
//     {
//       age: 62,
//       author: 'J. R. R. Tolkien',
//     },
//   ];
  
  // function nameAndAge(book) {
  //   return book.map((element) => (  //quando envolve o objeto entre parenteses eu estou dizendo que não quero bloco de código e sim quero um objeto de retorno se deixar só a chave lá estou dizendo que quero bloco de código
  //     {
  //      age: element.releaseYear - element.author.birthYear,
  //      author: element.author.name, 
  //     }
  //   ))
  //   .sort((elem1, elem2) => elem1.age - elem2.age);
  // }
  // console.log(nameAndAge(books));

  // --------------------------------------------

  // const expectedResult = [
  //   { 
  //     id: 1,
  //     name: 'As Crônicas de Gelo e Fogo',
  //     genre: 'Fantasia',
  //     author: { name: 'George R. R. Martin', birthYear: 1948 },
  //     releaseYear: 1991
  //   },
  //   {
  //     id: 2,
  //     name: 'O Senhor dos Anéis',
  //     genre: 'Fantasia',
  //     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
  //     releaseYear: 1954
  //   },
  //   {
  //     id: 3,
  //     name: 'Fundação',
  //     genre: 'Ficção Científica',
  //     author: { name: 'Isaac Asimov', birthYear: 1920 },
  //     releaseYear: 1951
  //   },
  //   {
  //     id: 4,
  //     name: 'Duna',
  //     genre: 'Ficção Científica',
  //     author: { name: 'Frank Herbert', birthYear: 1920 },
  //     releaseYear: 1965
  //   }
  // ];
// 3  Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// De olho na dica 👀: use a função filter;

  // function fantasyOrScienceFiction(book) {
  //   return book.filter((element) => (element.genre === 'Ficção Científica' || element.genre === 'Fantasia'));    
  // }

  // console.log(fantasyOrScienceFiction(books));

// --------------------------------------------------

// 4 Crie um array formado pelos livros com mais de 60 anos desde sua
//  publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
// De olho na dica 👀: use as funções filter e sort

// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

// function oldBooksOrdered(book) {
  
//   return book.filter((element) => (element.releaseYear < 1962 ))
//   .sort((a, b) => (a.releaseYear - b.releaseYear));
//   ;  
// }

// console.log(oldBooksOrdered(books))

// ---------------------------------

// 5 Crie um array em ordem alfabética apenas com 
// os nomes de todas as pessoas autoras de ficção científica ou fantasia.

// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// function fantasyOrScienceFictionAuthors(book) {
//   return book.filter((element) => (
//     element.genre === 'Ficção Científica' || element.genre === 'Fantasia' ))
//     .map((autor) => autor.author.name ).sort();  
// }

// console.log(fantasyOrScienceFictionAuthors(books))

// -----------------------------

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// function oldBooks(book) {
//  const ageCurrent = new Date().getFullYear();
//  const old60 = ageCurrent - 60  
//  return book.filter((element) => element.releaseYear < old60)
//  .map((book1) => book1.name);
// }

// console.log(oldBooks(books))

// -----------------------------------------

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// De olho na dica 👀: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(book) {
  return book.find((element) =>  
  element.author.name[1] === '.'
  && element.author.name[4] === '.'
  && element.author.name[7] === '.'
  ).name
}

console.log(authorWith3DotsOnName(books))
