function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMouth() {
    const getDay = document.querySelector('#days'); 
    
    for(let index = 0; index < decemberDaysList.length; index += 1) {
      
      let day = decemberDaysList[index];
      let dayItem = document.createElement('li');
      dayItem.innerHTML = day;

      if(day === 24 || day === 31) {
        dayItem.className = 'day holiday';
        getDay.appendChild(dayItem);

      } else if(day === 4 || day === 11 || day === 18) {
        dayItem.className = 'day friday'
        getDay.appendChild(dayItem);
      } else if(day === 25) {
        dayItem.className = 'day friday holiday'
        getDay.appendChild(dayItem);
      } else {
        dayItem.className = 'day';
        getDay.appendChild(dayItem); 
      }
    }    
  }
  createDaysOfTheMouth()

  function createButtonHoliday(aciona) {
    let buttonContainer = document.getElementsByClassName('buttons-container')[0] 
    let newButoon = document.createElement('button'); 
    newButoon.id = 'btn-holiday';
    newButoon.innerHTML = aciona;
    buttonContainer.appendChild(newButoon);
     
 }

 createButtonHoliday('Feriados');



function changeColorHoliday() {
 let getButtonHoliday = document.querySelector('#btn-holiday');
 let getDayholliday = document.querySelectorAll('.holiday');
 let colordefaut = 'rgb(238,238,238)';
 let colorchang = 'red';

 getButtonHoliday.addEventListener('click', function() {
 for(let index = 0; index < getDayholliday.length; index += 1) { 
   if (getDayholliday[index].style.backgroundColor === colorchang) {
     getDayholliday[index].style.backgroundColor = colordefaut;
   } else {
     getDayholliday[index].style.backgroundColor = colorchang;
   }
   
 }

 });
} 

changeColorHoliday();

// exercício 4 Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
//  Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function fridayButton (param) {
 let getButton = document.querySelector('.buttons-container')
 let buttonDay = document.createElement('button');
 buttonDay.innerText = param;
 buttonDay.id = 'btn-friday'
 getButton.appendChild(buttonDay);

}

fridayButton('Sexta-feira')

// Exercício 5
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira.
//  Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser 
//  exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, 
// ele retorna à configuração inicial exibindo os dias.

function changeFriday (arryFriday) {
 let getFriday = document.querySelector('.friday');
 let getButtonFriday = document.querySelector('#btn-friday');
 let textFriday = 'aloha hey';

 getButtonFriday.addEventListener('click', function() {
   for(let index = 0; index < getFriday.length; index += 1) {
     if(getFriday[index].innerText == textFriday) {
       getFriday[index].innerHTML = arryFriday[index];
     } else {
       getFriday[index].innerHTML = textFriday;
     }
   }
 })
}

let arryFriday = [4, 11, 18, 25];
changeFriday(arryFriday);