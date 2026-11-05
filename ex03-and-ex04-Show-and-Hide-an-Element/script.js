// Select the element to be shown or hidden
let element = document.querySelector(".element");

// Select the Show and Hide buttons by their class names
let btnShow = document.querySelector(".show");
let btnHide = document.querySelector(".hide");

btnShow.addEventListener('click', () => {
  element.style.display = 'block'
})

btnHide.addEventListener('click', () => {
  element.style.display = 'none'
})

