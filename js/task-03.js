const images = [{
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=50&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=50&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=50&w=1260',
    alt: 'Group of Horses Running',
  },
];
/* <ul class="gallery">
      <li>
        <img src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=50&w=260"
         alt="White and Black Long Fur Cat">
      </li>       
</ul> */
const list = document.querySelector(".gallery");

const w = ({
  url,
  alt
}) => {
  const itemLi = document.createElement("li");

  const imag = document.createElement("img")
  imag.src = url;
  imag.alt = alt;

  // console.log(imag)
  itemLi.append(imag)
  // list.append(itemLi)
  return itemLi;
};


const hop = images.map(w)
list.append(...hop)
// const w = elements => {
//   return elements.map(element => {
//     const itemLi = document.createElement("li");

//     const imag = document.createElement("img")
//     imag.src = element.url;
//     imag.alt = element.alt;

//     // console.log(imag)
//     itemLi.append(imag)
//     // list.append(itemLi)
//     return itemLi;
//   });
// };

// const hop = w(images)
// list.append(...hop)
// })