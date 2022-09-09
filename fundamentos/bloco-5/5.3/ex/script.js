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

//   🚀 Exercício 1:
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.
// Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo
// e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day.
// Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday.
// Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. 
//Ex: <li class="day friday">4</li>
  
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

//   Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"


  function createButtonHoliday(aciona) {
    let buttonContainer = document.getElementsByClassName('buttons-container')[0] 
    let newButoon = document.createElement('button'); 
    newButoon.id = 'btn-holiday';
    newButoon.innerHTML = aciona;
    buttonContainer.appendChild(newButoon);
     
 }

 createButtonHoliday('Feriados');

//  Exercício 3:
//  Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
//  Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo
//   dos dias que possuem a classe "holiday"
//  👀 É interessante que esse botão possua também a lógica inversa. Ao ser 
//  clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

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
 let getFriday = document.querySelectorAll('.friday');
 let getButtonFriday = document.querySelector('#btn-friday');
 let textFriday = 'aloha hey';

 getButtonFriday.addEventListener('click', () => {
     for (let index = 0; index < getFriday.length; index += 1) {
       if (getFriday[index].innerText == textFriday) {
         getFriday[index].innerHTML = arryFriday[index];
       } else {
         getFriday[index].innerHTML = textFriday;
       }
     }
   })
}

let arryFriday = [4, 11, 18, 25];
changeFriday(arryFriday);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse
// em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro 
//do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.


function zoomMouseDays() {
  
  let datysOfMouth = document.querySelector('#days');

  datysOfMouth.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
    });  
}

function outMouseDays() {
  
  let datysOfMouth = document.querySelector('#days');

  datysOfMouth.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
    });  
}

zoomMouseDays();
outMouseDays();

// Exercício 7
// Implemente uma função que adicione uma tarefa personalizada ao calendário. 
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") 
// e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que
//  possui a classe "my-tasks".

function tasksAdd(tarefa) {
  let task = document.createElement('span');
  let mytasks = document.querySelector('.my-tasks');

  task.innerHTML = tarefa;
  mytasks.appendChild(task);
}

tasksAdd('cozinhar');

// Exercício 8
// Implemente uma função que adicione uma legenda com cor para a tarefa.
// * Essa função deverá receber como parâmetro uma string ('cor') e 
//criar dinamicamente um elemento de tag `<div>` com a classe `task`.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que
//possui a classe "my-tasks".

function legenTask(cor) {
  let divTask = document.createElement('div');
  let mytasks = document.querySelector('.my-tasks');

  divTask.className = 'task';
  divTask.style.backgroundColor = cor;
  mytasks.appendChild(divTask);
}

legenTask('pink');

// Exercício 9
// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> 
// referente à cor da sua tarefa, atribua a esse elemento a classe task selected, 
// ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, 
// ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function selectTask() {
  let selectedTask = document.getElementsByClassName('task selected');
  let tasks = document.querySelector('.task');
  

  tasks.addEventListener('click', function(event) {
      if (selectedTask.length == 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });  
}

selectTask();


// Exercício 10
// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua
//  a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar 
// à configuração inicial rgb(119,119,119).

function colorDayTask() {
  let getDayTaskSelected = document.getElementsByClassName('task selected');
  let getTask = document.querySelector('.task');
  let days = document.querySelector('#days');
  let colorTask = getTask.style.backgroundColor;
  
  days.addEventListener('click', (event) => {
    let cliqDayColor = event.target.style.color;

    if(getDayTaskSelected.length > 0 && cliqDayColor !== colorTask) {
      let color = getDayTaskSelected[0].style.backgroundColor;
      event.target.style.color = color;
    } else if(cliqDayColor === colorTask) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

colorDayTask();

// 🚀 Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, 
// ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item 
// à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve 
// retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key.

function addTasks() {
  let getField = document.querySelector('#task-input');
  let getButtons = document.querySelector('#btn-add');
  let getList = document.querySelector('.task-list');

  getButtons.addEventListener('click', function() {
    if(getField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getField.value;

      getList.appendChild(newLi);
      getField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere')
    }
  });
  
  getField.addEventListener('keyup', function(event) {
    if(getField.value.length > 0 && event.key === 'enter') {
      let newLi = document.createElement('li');
      newLi.innerText = getField.value;

      getList.appendChild(newLi);
      getField.value = '';
    }
  });
}

addTasks();
