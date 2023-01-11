const refs = {
  body: document.body,
  btnStart: document.querySelector('.change-color'),
}
refs.btnStart.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
};