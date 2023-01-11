const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
const a = {};

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  console.log(formData);

  const e = event.currentTarget.elements.email.value;
  const p = event.currentTarget.elements.password.value;

  const as = {
    e,
    p
  };
  console.log(as)
  formData.forEach((value, name) => {
    // console.log('name', name);
    if (value === '') {
      alert("Усі поля повинні бути заповнені");
    }
  });

  document.querySelector(".login-form").reset();
}