/*
// exercício 1 Parte I

  //document.querySelectorAll('#elementoOndeVoceEsta');
  const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta') 
  
  // exercício 2

  const pai = elementoOndeVoceEsta.parentElement
  pai.style.color = 'blue';

  // exercício 3

  const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
  primeiroFilhoDoFilho.innerText = 'Esse sim é filho do filho'

  // exercício 4

  const primeiroFilho = pai.firstElementChild;

  // exercício 5
  
  const primeiroFilhoOndeVoceEsta = elementoOndeVoceEsta.previousElementSibling;

  // exercício 6

  const textAtencao = elementoOndeVoceEsta.nextSibling;

  // exercício 7

  const textT1 = elementoOndeVoceEsta.nextElementSibling;

  // exercício 8
  
  const textT2 = pai.lastElementChild.previousElementSibling;
*/
/*
  // parte II
  // exercício 1

const pai = document.getElementById('pai'); //recuperei o elemento pai
const irmaoElementoOndeEsta = document.createElement('section'); //criei um elemento html section
irmaoElementoOndeEsta.id = 'irmaoElementoOndeEsta'; //criei uma id para esse novo elemento criado html
pai.appendChild(irmaoElementoOndeEsta) //inseri para dentro do meu html esse elemento criado como filho do elemento recuperado com id 'pai'

// exercício 2
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// exercício 3

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// exercício 4

const terceiroFilho = filhoPrimeiroFilhoDoFilho
.parentElement
.parentElement
.nextElementSibling;
console.log(terceiroFilho);
*/

// exercícios parte 3 'não ficou claro a resolução

