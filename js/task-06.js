// const refs = {
//   data: document.querySelector("[data-length]")
// }
// console.log(refs.data.placeholder)
// console.log(refs.data.data - length)
// const a = Number(refs.data.data - length.value)
// console.log(a)

document.getElementById("validation-input").onblur = function () {
  console.log(this.value.length);
  console.log(this.getAttribute('data-length'));

  if (
    this.getAttribute('data-length') == this.value.length) {
    this.classList.add('valid');
    this.classList.remove('invalid');
  } else {
    this.classList.add('invalid');
    this.classList.remove('valid');
  }
}