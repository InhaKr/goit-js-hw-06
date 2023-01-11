// {
/* <div id="counter">
  <button type="button" data-action="decrement" onClick="decrement();">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment" onClick="increment();">+1</button>
</div> */
// }

// function increment() {
//   counterValue += 1;
//   document.getElementById('value').innerHTML = counterValue;
// }

// function decrement() {
//   counterValue -= 1;
//   document.getElementById('value').innerHTML = counterValue;
// }

const refs = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
};

let counterValue = 0;

function increment() {
  counterValue += 1;
  refs.span.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  refs.span.textContent = counterValue;
}

// const increment = () => {
//   counterValue += 1;

//   refs.span.textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;

//   refs.span.textContent = counterValue;
// };
refs.sub.addEventListener('click', increment);
refs.add.addEventListener('click', decrement);