let countClicked = 0;

const counterBtn = document.querySelector('.counter__button');
const counterText = document.querySelector('.counter');

counterBtn.addEventListener('click', function handleClick() {
    countClicked++;
    counterText.textContent = `You clicked ${countClicked} times`;
});
