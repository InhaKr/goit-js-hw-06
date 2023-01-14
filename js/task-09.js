const refs = {
  body: document.body,
  btnStart: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color')
}
refs.btnStart.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



function changeColor() {
  let r = getRandomHexColor()
  // console.log(r)
  refs.body.style.backgroundColor = r;
  console.log(r)
  refs.spanColor.textContent = r;

};