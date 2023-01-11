const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const w = elements => {
  return elements.map(element => {
    const itemLi = document.createElement("li");
    itemLi.textContent = element;
    itemLi.classList.add('item');
    return itemLi;
  });
};

const z = w(ingredients);
list.append(...z)

// const list = document.querySelector("#ingredients");

// const e = ingredients.map(element => {
//   const itemLi = document.createElement("li");
//   itemLi.textContent = element;
//   itemLi.classList.add('item')
//   return itemLi
// })
// console.log(e)
// list.append(...e)


// const r = []
// for (let i = 0; i < ingredients.length; i++) {
//   // console.log(ingredients[i])
//   const itemLi = document.createElement("li");
//   itemLi.textContent = ingredients[i];
//   itemLi.classList.add('item')
//   // list.append(itemLi)
//   r.push(itemLi)
//   // console.log(itemLi)
// }
// console.log(r)
// list.append(...r)