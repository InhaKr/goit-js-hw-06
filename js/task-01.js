const generalUL = document.querySelector('ul#categories')
const generalItems = generalUL.querySelectorAll('li.item')
// console.log(generalItems)
console.log(`Number of categories: ` + generalItems.length)


// debugger
const z = document.querySelectorAll('li.item h2')
console.log(z)

for (let i = 0; i < 1; i += 1) {
  // console.log(`Category: ` + z[i].textContent)
  let r;
  const x = document.querySelectorAll('.item>ul')
  for (let i = 0; i < x.length; i++) {
    r = x[i];
    console.log(`Category: ` + z[i].textContent)
    console.log(`Elements: ` + r.children.length)
  }
}