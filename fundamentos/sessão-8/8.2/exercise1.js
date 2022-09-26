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
  
  // 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

  // function authorBornIn1947(book) {
  // return book.find((element) => element.author.birthYear === 1947).author.name;
  // }  

  // console.log(authorBornIn1947(books));


  // -----------------------------------------------


  // 2 - Retorne o nome do livro de menor nome.

//   function smallerName(book) {
//     let nameBook;
//     book.forEach((books) => {
//       if (!nameBook || books.name.length < nameBook.length) {
//         nameBook = books.name;
//       }
//     })
//     return nameBook;
//   }

// console.log(smallerName(books))

// --------------------------------------------------

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.


// function getNamedBook(get) {
//   return get.find((livr) => livr.name.length === 26);
// }

// console.log(getNamedBook(books));

// ----------------------------------------------------

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

// function orderBooks (bookOrder) {
//   return bookOrder.sort((a , b) => b.releaseYear - a.releaseYear)
// }

// console.log(orderBooks(books))
// --------------------------------
// 5 -Faça uma função que retorne true, se todas as pessoas autoras
// nasceram no século XX, ou false, caso contrário.



// function everyoneWasBornOnSecXX(books) {
//   return books.every((element) => element.author.birthYear > 1900 && element.author.birthYear < 2000)
// }

// console.log(everyoneWasBornOnSecXX(books))

// ------------------------------------------

// 6 - faça uma função para as pessoas nascidas na década de 80

//const expectedResult = true;

// function someBookWasReleaseOnThe80s(book) {
//   return book.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989)
// }

// console.log(someBookWasReleaseOnThe80s(books))

// -----------------------------------------

// 7  - Faça uma função que retorne true, caso nenhum author tenha
// nascido no mesmo ano, e false, caso contrário.
// const expectedResult = false;

// function authorUnique(books) {
//   return books.every((bookEvery) => 
//     !books.some((bookSome) => 
//        (bookSome.author.birthYear === bookEvery.author.birthYear)
//         && (bookSome.author.name !== bookEvery.author.name)))
// }

// console.log(authorUnique(books))