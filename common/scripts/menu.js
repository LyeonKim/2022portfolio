const menu = document.querySelector('#menu');
const btn = document.querySelector('.hamburger_menu');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {
  // e.preventDefault();
  menu.classList.toggle('active');
  btn.classList.toggle('active');
});

