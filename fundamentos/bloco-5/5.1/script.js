//no caso abaixo a função tá colorindo o id paragraph

const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";

//aqui eu recuperei o id e alterei o texto  

document.getElementById('page-title').innerText = 'Elysium'

// 2 - Agora recupere o segundo parágrafo e use sua criatividade para
      //  alterá-lo.

document.getElementById("second-paragraph").innerText = 'Muito top esse filme'  

// Eu também poderia fazer assim
//const secondParagraph = document.getElementById('second-paragraph');
//       secondParagraph.innerText = 'The answer to life the universe and everything is 42.';


 // 3 - Por fim, recupere o subtítulo e altere-o também.
document.getElementById("subtitle").innerText = 'esse é o subtítulo desse artigo'
 
// let paragrafos =  document.getElementsByClassName('lenda');

// for (let index = 0; index < paragrafos.length; index += 1) {
//   console.log(paragrafos[index]) 
// }

// quando eu quero alterar o conteúdo de uma tag específica joga document.getElementsByClassName[0].innerText = 'aí sim'

// 2 Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;

const paragraf = document.getElementsByClassName('lenda')

//Altere algum estilo do primeiro deles.
//document.getElementsByClassName('lenda')[0].style.color = 'green'
//fica melhor eu fazer assim
const soulink = document.getElementsByClassName('lenda')
soulink[0].style.color = 'purple'
const subn = document.getElementsByTagName("h4")[0];
subn.style.color = 'pink'

