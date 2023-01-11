const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output')
};


// const nameInput = document.querySelector('#name-input');
// console.log(refs.input)
refs.nameLabel.textContent = "Anonymous";
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
  console.log(refs.nameLabel)
}