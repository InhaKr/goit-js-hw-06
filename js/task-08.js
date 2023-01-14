const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  // console.log(formData)
  const e = event.currentTarget.elements.email.value;
  const p = event.currentTarget.elements.password.value;
  const as = {
    e,
    p
  };

  formData.forEach((value, name) => {
    // console.log(value)
    // console.log(value.length)
    // debugger
    if (e == "" || p == "") {
      // console.log(value)
      alert("Усі поля повинні бути заповнені");
    } else {
      console.log(as)
      document.querySelector(".login-form").reset();
    }
  })
}