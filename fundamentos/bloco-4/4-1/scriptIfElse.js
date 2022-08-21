/*
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
- Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
- Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
- Se a nota for menor que 60, imprima "Você foi reprovada(o)"


const nota1 = 80;
if (nota1 < 60) {
  console.log('Você foi reprovada(o)');
} else if (nota1 < 80) {
  console.log('Você está na nossa lista de espera');
}
  else {
    console.log('Parabéns, você foi aprovada(o)');
}*/

// operadores lógicos //

/*Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
- Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
- Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
- Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
- Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

const currentHour = 18;

let message = '';

if (currentHour > 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém passado';
} else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 22) {
  message = 'Não deveriamos comer nada, é hora de dormir'; 
}
console.log(message) */

/*operador or

1 - Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
2 - Implemente condicionais para que:
 - Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".

 - Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).

let weekDay = 'sabado'
if (weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D')
} else {
  console.log('FINALMENTE, descanso merecido UwU')
} */

/*
let statusCandidato = 'chunorris'

switch (statusCandidato) {
  case 'aprovada':
  console.log('você conseguiu aprovada')
  break;

  case 'lista':
  console.log('lista')
  break;

  case 'reprovada':
  console.log('reprovada')
  break;

  default:
    console.log('não se aplica')
}
*/

