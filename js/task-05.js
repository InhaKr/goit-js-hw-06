const refs = {
  input: document.querySelector('#name-input'),
  plac: document.querySelector("[placeholder='Please enter your name']"),
  nameLabel: document.querySelector('#name-output')
};


refs.nameLabel.textContent = "Anonymous";
refs.input.addEventListener('input', onInputChange);
refs.plac.placeholder = "Anonymous"

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
  console.log(refs.nameLabel)
}