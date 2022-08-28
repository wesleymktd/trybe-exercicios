// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//exercício 1

//console.log('Bem-vinda, ' + info.personagem);

//exercício 2

// info.recorrente = 'Sim';

//console.log(info);

//exercício 3

// for (let index in info) {
//   console.log(index);
// }

//exercício 4

// for (let contagem in info) {
//   console.log(info[contagem]);
// }

// exercício 5

// let lifeDuck = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim', // Atenção para essa última linha!
// };

// for (let contagem in lifeDuck) {
//   if (
//     contagem === 'recorrente' && 
//     lifeDuck.recorrente === 'Sim' && 
//     info.recorrente === 'Sim'
//   ) {
//     console.log('Ambos recorrentes');
//   } else {
//     console.log(info[contagem] + ' e ' + lifeDuck[contagem]);
//   }
// }

//-------------------------------------------------------------------------

//exercício 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    
  ],
};

//console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

//exercício 7

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  },
)