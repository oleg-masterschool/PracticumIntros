function addNumbers(numb1, numb2) {
    return numb1 + numb2;
}

const inputs = document.querySelectorAll('input');

function getNumber(index) {
    return inputs[index].value;
}

const form = document.forms.debugging;
const result = document.querySelector('.form__result');

function submitHandler(evt) {
    result.textContent = '';
    evt.preventDefault();

    const num1 = getNumber(0);
    const num2 = getNumber(1);

    if (!num1 || !num2) {
        result.textContent = 'Please input both numbers'
    }

    result.textContent = addNumbers(num1, num2);
}

const resetButton = document.querySelector('.button__reset');

resetButton.addEventListener('click', function (evt) {
    result.textContent = '';
});

form.addEventListener('submit', submitHandler);
