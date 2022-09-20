const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navBar = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
  navBar.classList.add('menu-show');
});

closeBtn.addEventListener('click', () => {
  navBar.classList.remove('menu-show');
});

document.querySelector('.menu-btn').addEventListener('click', () => {
  navBar.style.display = 'block';
});

document.querySelectorAll('.mobile-nav').forEach((n) => (
  n.addEventListener('click', () => {
    menuBtn.classList.remove('menu-show');
    navBar.classList.remove('menu-show');
  })));
