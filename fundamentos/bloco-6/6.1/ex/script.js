function clickEt(event) {
    event.preventDefault();
}

function clearLabel() {
    let inputs = document.querySelectorAll('input');
    let textArea = document.querySelector('textarea');

    for(let index = 0; index < inputs.length; index += 1) {
        let elementGet = inputs[index];
        elementGet.value = '';
        elementGet.checked = false;
    }
    textArea.value = '';
}


window.onload = function () {
    let getButtonClear = document.querySelector('#clear-fields');
    getButtonClear.addEventListener('click',clearLabel);

    const subButton = document.querySelector('#submit-btn');
    subButton.addEventListener('click', clickEt);
}


