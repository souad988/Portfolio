const menuIcon = document.querySelector('.menu_icon');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close_icon');
const welcome = document.querySelector('.welcome');
const container = document.querySelector('.menu_list_container');
const mobileNavLinks = document.querySelectorAll('.nav-link');

function closeMobileNav() {
  menuIcon.classList.remove('hide');
  navLinks.classList.remove('show-list');
  closeIcon.classList.remove('show-icon');
  welcome.classList.remove('hide');
  container.classList.remove('show-menu_list_container');
}

menuIcon.addEventListener('click', () => {
  menuIcon.classList.add('hide');
  navLinks.classList.add('show-list');
  closeIcon.classList.add('show-icon');
  welcome.classList.add('hide');
  container.classList.add('show-menu_list_container');
});



closeIcon.addEventListener('click',closeMobileNav);

navLinks.addEventListener('click', closeMobileNav);

