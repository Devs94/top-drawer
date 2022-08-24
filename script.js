let drawer = document.querySelector('nav');
console.log(drawer);

let toggler_button = document.querySelector('#button-toggler');
console.log(toggler_button);

toggler_button.addEventListener('click', () => {
  console.log('Clicked');
  drawer.classList.toggle('drawer-active');
  drawer.classList.toggle('drawer-hidden');
  console.log(toggler_button.classList);
});