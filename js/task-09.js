function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');


btnRef.addEventListener('click', onButtonClick);

function onButtonClick(){
  document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = document.body.style.backgroundColor;
}