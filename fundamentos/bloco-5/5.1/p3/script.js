const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

 const cats = document.getElementsByClassName('emergency-tasks')[0];
 cats.style.backgroundColor = 'rgb(255, 159, 132)';

// const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
// emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const ar1 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < ar1.length; index += 1) {
  ar1[index].style.backgroundColor = 'rgb(165, 0, 243)';
}


const noEmergency = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergency.style.backgroundColor = 'rgb(165, 0, 243)'