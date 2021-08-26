import menuSample from './templates/menu.hbs';
import menu from './menu.json';
// console.log(menuSample(menu[0]));

const ulEl = document.querySelector('ul.js-menu');
// theme //
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeCheckboxEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

if (localStorage.getItem('theme') === Theme.DARK) {
  themeCheckboxEl.setAttribute('checked', true);
  bodyEl.classList.add(localStorage.getItem('theme'));
}

themeCheckboxEl.addEventListener('change', changeThemeCheckbox);

function changeThemeCheckbox() {
  if (bodyEl.classList.contains(Theme.DARK)) {
    bodyEl.classList.remove(localStorage.getItem('theme'));
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    bodyEl.classList.remove(localStorage.getItem('theme'));
    localStorage.setItem('theme', Theme.DARK);
  }
  bodyEl.classList.add(localStorage.getItem('theme'));
}

// end theme //

// sample //
const cardsMakeup = createCards(menu);
// console.log(cardsMakeup);
function createCards(menu) {
  return menu.map(el => menuSample(el)).join('');
}
ulEl.insertAdjacentHTML('beforeend', cardsMakeup);
// end sample //
